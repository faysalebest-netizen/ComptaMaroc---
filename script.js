// تفعيل إظهار الحلول في صفحة التمارين
const toggleButtons = document.querySelectorAll('.toggle-solution');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const solution = document.getElementById(targetId);
    if (!solution) return;

    const isHidden = solution.classList.toggle('hidden');
    button.textContent = isHidden ? 'إظهار الحل' : 'إخفاء الحل';
  });
});

// تفعيل تصحيح الاختبار في صفحة Quiz
const quizForm = document.getElementById('quiz-form');
const quizResult = document.getElementById('quiz-result');

if (quizForm && quizResult) {
  quizForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const answers = {
      q1: 'b',
      q2: 'a',
      q3: 'c',
    };

    let score = 0;
    Object.keys(answers).forEach((question) => {
      const selected = quizForm.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === answers[question]) {
        score += 1;
      }
    });

    const total = Object.keys(answers).length;
    quizResult.classList.remove('hidden');
    quizResult.textContent = `نتيجتك: ${score} من ${total}. استمر في المراجعة لتحقق نتيجة أفضل!`;
  });
}
