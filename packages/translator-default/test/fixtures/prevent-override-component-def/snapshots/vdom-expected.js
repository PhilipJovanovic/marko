const _marko_template = _t(__filename);

export default _marko_template;
import _marko_createElement from "marko/src/runtime/vdom/helpers/v-element";

const _marko_node = _marko_createElement("div", null, "0", null, 0, 0);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("packages/translator-default/test/fixtures/prevent-override-component-def/template.marko", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component2, component, state) {
  const _component = "test";
  out.n(_marko_node, component);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);