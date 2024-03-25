/*
Код вставлен на уровне проекта
Для него необходимы библиотеки GSAP
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js"></script>
и кастомная библиотека Refokus <script src="https://unpkg.com/split-type"></script>
*/
//gsap animate text by letters scrub opacity
<script>
let typeSplit = new SplitType('[animate-text="letters-scrub-opacity"]', {
  types: 'lines, words, chars',
  tagName: 'span',
});

gsap.from('[animate-text="letters-scrub-opacity"] .char', {
  opacity: 0.3,
  duration: 0.1,
  ease: 'power1.out',
  stagger: 0.1,

  scrollTrigger: {
    trigger: '[animate-text="letters-scrub-opacity"]',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  },
});
</script>
//end: gsap animate text by letters scrub opacity
