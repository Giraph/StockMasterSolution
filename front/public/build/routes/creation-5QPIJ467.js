import {
  Form
} from "/build/_shared/chunk-XDZREXSE.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-OFC4SBVT.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/creation.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/creation.tsx"
  );
  import.meta.hot.lastModified = "1709240763589.1174";
}
function creation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center content-center h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " mt-8 w-auto h-1/2 overflow-hidden shadow-xl p-10 rounded-3xl border border-black", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "justify-center text-2xl text-center pb-6", children: "Cr\xE9ation de stock" }, void 0, false, {
      fileName: "app/routes/creation.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-700", children: "Nom" }, void 0, false, {
          fileName: "app/routes/creation.tsx",
          lineNumber: 29,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "text",
            name: "name",
            placeholder: "nom de l'entreprise",
            className: "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 mb-5"
          },
          void 0,
          false,
          {
            fileName: "app/routes/creation.tsx",
            lineNumber: 30,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/creation.tsx",
        lineNumber: 28,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-700", children: "Montant" }, void 0, false, {
          fileName: "app/routes/creation.tsx",
          lineNumber: 39,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            min: "0",
            step: "0.01",
            type: "number",
            name: "price",
            placeholder: "valeur de l'action",
            className: "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 mb-5"
          },
          void 0,
          false,
          {
            fileName: "app/routes/creation.tsx",
            lineNumber: 40,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/creation.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-700", children: "Quantit\xE9" }, void 0, false, {
          fileName: "app/routes/creation.tsx",
          lineNumber: 51,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            min: "0",
            type: "number",
            name: "quantity",
            placeholder: "quantit\xE9 disponible",
            className: "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 mb-5"
          },
          void 0,
          false,
          {
            fileName: "app/routes/creation.tsx",
            lineNumber: 52,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/creation.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "submit",
          className: " m-3  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
          children: "Valider"
        },
        void 0,
        false,
        {
          fileName: "app/routes/creation.tsx",
          lineNumber: 61,
          columnNumber: 25
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/creation.tsx",
        lineNumber: 60,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/creation.tsx",
      lineNumber: 27,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/creation.tsx",
    lineNumber: 23,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/creation.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
}
export {
  creation as default
};
//# sourceMappingURL=/build/routes/creation-5QPIJ467.js.map
