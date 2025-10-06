import { useRef, useEffect, useCallback } from 'react';

const ClickSpark = ({
  sparkColor = '#fff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = 'ease-out',
  extraScale = 1.0,
  children
}) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);
  const startTimeRef = useRef(null);
  const lastHoverTimeRef = useRef(0);
  const hoverThrottleRef = useRef(100); // 控制悬停火花频率（毫秒）

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const easeFunc = useCallback(
    t => {
      switch (easing) {
        case 'linear':
          return t;
        case 'ease-in':
          return t * t;
        case 'ease-in-out':
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default:
          return t * (2 - t);
      }
    },
    [easing]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;

    const draw = timestamp => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter(spark => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) {
          return false;
        }

        const progress = elapsed / duration;
        const eased = easeFunc(progress);

        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easeFunc, extraScale]);

  const createSparks = useCallback((x, y) => {
    const now = performance.now();
    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now
    }));

    sparksRef.current.push(...newSparks);
  }, [sparkCount]);

  const handleClick = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    createSparks(e.clientX, e.clientY);
  }, [createSparks]);

  // 检测是否鼠标悬停在链接上
  const handleMouseMove = useCallback((e) => {
    const now = performance.now();
    
    // 节流：避免火花太密集
    if (now - lastHoverTimeRef.current < hoverThrottleRef.current) {
      return;
    }

    // 检查鼠标下的元素是否是链接
    const element = e.target;
    const isLink = element.tagName === 'A' || 
                   element.closest('a') !== null ||
                   element.getAttribute('role') === 'link';

    if (isLink) {
      lastHoverTimeRef.current = now;
      createSparks(e.clientX, e.clientY);
    }
  }, [createSparks]);

  useEffect(() => {
    // 监听点击事件
    document.addEventListener('click', handleClick, true);
    // 监听鼠标移动事件
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleClick, handleMouseMove]);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]" 
        style={{ display: 'block' }}
      />
      {children}
    </>
  );
};

export default ClickSpark;
