const _marko_template = _t(__filename);

export default _marko_template;
import _marko_createElement from "marko/src/runtime/vdom/helpers/v-element";

const _marko_node = _marko_createElement("script", null, "1", null, 3, 0).t("\n    ").t("Hello <b> </script>").t("\n  ");

const _marko_node2 = _marko_createElement("style", null, "2", null, 3, 0).t("\n    ").t("Hello <b> </style>").t("\n  ");

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("packages/translator-default/test/fixtures/placeholders/template.marko", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("div", null, "0", component, null, 0);
  out.t(input.x);
  out.t("Hello world <a/>");
  out.h(input.x);
  out.h("Hello world <a/>");
  out.n(_marko_node, component);
  out.n(_marko_node2, component);
  out.ee();
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);