document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('space');
    const ctx = canvas.getContext('2d');
    let w, h;
    
    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resize);
    resize();
    
    const stars = [];
    const shootingStars = [];
    
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.2,
        alpha: Math.random(),
        delta: Math.random() * 0.02
      });
    }
    
    function createShootingStar() {
      shootingStars.push({
        x: Math.random() * w,
        y: Math.random() * h / 2,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 8 + 6,
        opacity: 1
      });
    }
    
    setInterval(createShootingStar, 4000); // a cada 4 segundos
    
    function draw() {
      ctx.fillStyle = 'rgb(25, 25, 112)';
      ctx.fillRect(0, 0, w, h);
    
      // Estrelas
      ctx.save();
      ctx.fillStyle = 'white';
      stars.forEach(star => {
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;
    
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    
      // Estrelas cadentes
      for (let i = 0; i < shootingStars.length; i++) {
        const s = shootingStars[i];
        ctx.strokeStyle = `rgba(255,255,255,${s.opacity})`;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.length, s.y + s.length * 0.3);
        ctx.stroke();
    
        s.x += s.speed;
        s.y += s.speed * 0.3;
        s.opacity -= 0.02;
    
        if (s.opacity <= 0) {
          shootingStars.splice(i, 1);
          i--;
        }
      }
    
      requestAnimationFrame(draw);
    }
    
    draw();
})

