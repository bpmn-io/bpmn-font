const glob = require('tiny-glob');

const fs = require('fs');


async function build() {

  const svgs = await glob('source/symbols/**/*.svg');

  const imageTags = svgs.map(path => {
    return `<img class="icon" style="width: 28px" onmouseover="showPreview.call(this)" onmouseout="hidePreview.call(this)" alt="${path}" title="${path}" src="../${path}" />`;
  }).join('');

  const html = `
  <html>
  <head>
    <style>
      h1 {
        vertical-align: middle;
      }

      .icon {
        margin: 15px;
      }
    </style>
  </head>
  <body>

    <script>

      function showPreview() {

        this.src = this.src.replace('symbols', 'raw');
      }

      function hidePreview() {
        this.src = this.src.replace('raw', 'symbols');
      }

      function inc() {
        return change(+4);
      }

      function dec() {
        return change(-4);
      }

      function change(diff) {

        document.querySelectorAll('.icons img').forEach(function(el) {

          var size = parseInt(el.style.width, 10);

          var newSize = size + diff;

          el.style.width = newSize + 'px';
        });
      }
    </script>

    <h1>bpmn-font icons <button onclick="inc()">+</button> <button onclick="dec()">-</button></h1>

    <div class="icons">
      ${imageTags}
    </div>
  </body>
  `;

  fs.writeFileSync('resources/test.html', html, 'utf8');
};


build().catch(err => {
  console.error(err);

  process.exit(1);
});