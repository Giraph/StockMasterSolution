import {
  useLoaderData
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/carteStock.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/carteStock.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/carteStock.jsx"
  );
}
function CarteStock(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-sm  rounded-xl overflow-hidden shadow-lg p-10 m-10 border border-black min-w-max flex flex-col gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-bold text-xl mb-2 text-center", children: props.nom }, void 0, false, {
      fileName: "app/components/carteStock.jsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Quantit\xE9 : ",
      props.quantite
    ] }, void 0, true, {
      fileName: "app/components/carteStock.jsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Valeur : ",
      props.valeur,
      "\u20AC"
    ] }, void 0, true, {
      fileName: "app/components/carteStock.jsx",
      lineNumber: 25,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/carteStock.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = CarteStock;
var _c;
$RefreshReg$(_c, "CarteStock");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/inventaire.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/inventaire.jsx"
  );
  import.meta.hot.lastModified = "1709242312837.607";
}
function inventaire() {
  const data = useLoaderData();
  console.log("test", data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col h-full ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " flex justify-center flex-row items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "input",
        {
          type: "text",
          placeholder: "Rechercher un stock",
          className: "border border-black rounded-lg p-2 my-10  w-1/3"
        },
        void 0,
        false,
        {
          fileName: "app/routes/inventaire.jsx",
          lineNumber: 39,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "div",
        {
          className: " absolute left-[64%] inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ",
          role: "status"
        },
        void 0,
        false,
        {
          fileName: "app/routes/inventaire.jsx",
          lineNumber: 44,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/inventaire.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6", children: data.map((stock) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      CarteStock,
      {
        nom: stock.designation,
        quantite: stock.quantite,
        valeur: stock.prix_unitaire
      },
      stock._id,
      false,
      {
        fileName: "app/routes/inventaire.jsx",
        lineNumber: 51,
        columnNumber: 21
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/inventaire.jsx",
      lineNumber: 49,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/inventaire.jsx",
    lineNumber: 37,
    columnNumber: 9
  }, this);
}
export {
  inventaire as default
};
//# sourceMappingURL=/build/routes/inventaire-UFQOIPXH.js.map
