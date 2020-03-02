# Ad inflow modal

A simple modal inflow video ad.

## Quick usage

```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ad-inflow-modal@latest/dist/ad-inflow-modal.min.css">
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ad-inflow-modal@latest/dist/ad-inflow-modal.min.js"></script>
</head>
```

```javascript
var modal = new AdInflowModal({
  // closeButtonDelay: 3000,
  // skipAdIfNoAutoplay: true,
  // canAutoplayTimeout: 800,
  // logAdPlayerErrors: false,
  // openOnInteractionIfNoAutoplay: true,
  // requestAdIfNoAutoplay: true,
  imaAdPlayer: {
    tag: 'https://myadserver.com/path/to/vast/linear/tag.xml',
    vpaidMode: 2,
    locale: 'fr',
    maxDuration: 30000,
  },
});

modal.open();
```

Note: `imaAdPlayer` property is IMA Ad player [configuration object](https://github.com/kslimani/ima-ad-player/blob/master/docs/config.md).
