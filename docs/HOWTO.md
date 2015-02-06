# how-to font

[see docs](https://github.com/fontello/fontello/wiki/How-to-use-custom-images)
[on building fonts](https://github.com/blog/1135-the-making-of-octicons)



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