# Release a new version of bpmn-font

A new version of bpmn-font should only be released, if really necessary, because with
each release new font binaries are added to the github repository.


## Update Steps

- Import [resources/font-config.json](../resources/font-config.json) to Fontello.
- Download webfont.
- Copy the `dist/css`, `dist/font` and `dist/demo.html` files to the project root.
- Adjust the version property in `bpmn-font/package.json`.
- (optional) Tweet how awesome the new version of the font is!