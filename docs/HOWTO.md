# how-to font

[see docs](https://github.com/fontello/fontello/wiki/How-to-use-custom-images)
[on building fonts](https://github.com/blog/1135-the-making-of-octicons)


## creating font symbols

__TLDR;__ Use [Inkscape](https://inkscape.org) to create our font symbols as 2000*2000 SVG graphics. Following [some rules](https://github.com/fontello/fontello/wiki/How-to-use-custom-images), convert them to a single path.

### steps

1. Create font symbols in `src/raw` as 2000*2000 pixel SVG graphics
2. Export as font path to `src/symbols`


## export as font-friendly SVG path

(copied from [fontello](https://github.com/fontello/fontello/wiki/How-to-use-custom-images))

You may need to do some additional simplification of your drawing, such converting objects and strokes to paths (see the Path menu), in addition to the below. You can check the svg file output in a text editor - if it has worked correctly, you should see a single <path> element and an empty <defs> element.

* Select all
* Object -> Ungroup
* Path -> Stroke to Path
* Select all 
* Path -> Union
* File -> Vacuum Defs / Clean up document
* Save as -> Plain SVG

Save the symbols to the `src/symbols` folder.


## generate font

(use [fontello](http://fontello.com))

Drag and drop the svg symbols to [fontello](http://fontello.com/), adjust names and export the result into the `dist` folder.


## embedd the font

```css

[class^="icon-"]:before, [class*=" icon-"]:before {
  font-family: "bpmn";
  font-style: normal;
  font-weight: normal;
  speak: none;

  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  text-align: center;

  font-variant: normal;
  text-transform: none;

  line-height: 1;
}
```
