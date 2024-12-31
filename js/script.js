// js/script.js

// 点击/触摸生成特效的小脚本
document.addEventListener('click', function(e) {
  // 创建一个圆圈元素
  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
  document.body.appendChild(circle);

  // 动画结束后移除该元素
  setTimeout(() => {
    circle.remove();
  }, 600);
});

// 新年倒计时脚本
const countdown = () => {
  // 设置你的目标日期和时间
  const countDate = new Date('January 1, 2025 01:50:00').getTime(); // 修改为你的目标日期
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  if (gap < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerText = '新年快乐！';
    // 显示祝福弹窗
    document.getElementById('newYearMessage').classList.add('show');
  }
}

const timer = setInterval(countdown, 1000);

// 背景音乐控制
const music = document.getElementById('background-music');
const musicControl = document.getElementById('music-control');
const musicIcon = musicControl.querySelector('i');

// 检查用户是否已经播放过音乐
document.addEventListener('DOMContentLoaded', () => {
  // 尝试自动播放（部分浏览器可能阻止）
  music.play().then(() => {
    musicIcon.classList.remove('fa-play');
    musicIcon.classList.add('fa-pause');
  }).catch((error) => {
    // 自动播放失败，用户需要手动播放
    console.log('自动播放被阻止，请用户手动播放音乐。');
  });
});

// 播放/暂停按钮点击事件
musicControl.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicIcon.classList.remove('fa-play');
    musicIcon.classList.add('fa-pause');
  } else {
    music.pause();
    musicIcon.classList.remove('fa-pause');
    musicIcon.classList.add('fa-play');
  }
});
