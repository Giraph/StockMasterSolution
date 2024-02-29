var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";

// app/components/navbar.jsx
import { Link } from "@remix-run/react";
import { Fragment, jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function Navbar() {
  return /* @__PURE__ */ jsxDEV2(Fragment, { children: /* @__PURE__ */ jsxDEV2("nav", { className: "bg-white border-gray-200 dark:bg-gray-900", children: /* @__PURE__ */ jsxDEV2("div", { className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4", children: [
    /* @__PURE__ */ jsxDEV2("span", { className: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white", children: "Stock Master Solutions" }, void 0, !1, {
      fileName: "app/components/navbar.jsx",
      lineNumber: 8,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV2(
      "div",
      {
        className: "hidden w-full md:block md:w-auto",
        id: "navbar-default",
        children: /* @__PURE__ */ jsxDEV2("ul", { className: "font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700", children: [
          /* @__PURE__ */ jsxDEV2("li", { className: "mr-3", children: /* @__PURE__ */ jsxDEV2(
            Link,
            {
              to: "/inventaire",
              className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
              children: "Inventaire"
            },
            void 0,
            !1,
            {
              fileName: "app/components/navbar.jsx",
              lineNumber: 17,
              columnNumber: 33
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/navbar.jsx",
            lineNumber: 16,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV2("li", { className: "mr-3", children: /* @__PURE__ */ jsxDEV2(
            Link,
            {
              to: "/creation",
              className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
              children: "Cr\xE9ation"
            },
            void 0,
            !1,
            {
              fileName: "app/components/navbar.jsx",
              lineNumber: 25,
              columnNumber: 33
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/navbar.jsx",
            lineNumber: 24,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/navbar.jsx",
          lineNumber: 15,
          columnNumber: 25
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/navbar.jsx",
        lineNumber: 11,
        columnNumber: 21
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/navbar.jsx",
    lineNumber: 7,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/navbar.jsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/navbar.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SVYQLO5P.css";

// app/root.jsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  return /* @__PURE__ */ jsxDEV3("html", { children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("link", { rel: "icon", href: "data:image/x-icon;base64,AA" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 12,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 14,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3(Navbar, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/inventaire.$idstock.jsx
var inventaire_idstock_exports = {};

// app/routes/inventaire.jsx
var inventaire_exports = {};
__export(inventaire_exports, {
  default: () => inventaire
});

// app/components/carteStock.jsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function CarteStock(props) {
  return /* @__PURE__ */ jsxDEV4("div", { className: "max-w-sm  rounded-xl overflow-hidden shadow-lg p-10 m-10 border border-black min-w-max flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxDEV4("h1", { className: "font-bold text-xl mb-2 text-center", children: props.nom }, void 0, !1, {
      fileName: "app/components/carteStock.jsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { children: [
      "Quantit\xE9 : ",
      props.quantite
    ] }, void 0, !0, {
      fileName: "app/components/carteStock.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { children: [
      "Valeur : ",
      props.valeur,
      "\u20AC"
    ] }, void 0, !0, {
      fileName: "app/components/carteStock.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/carteStock.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/inventaire.jsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function inventaire() {
  return /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-col h-full ", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: " flex justify-center flex-row items-center", children: [
      /* @__PURE__ */ jsxDEV5(
        "input",
        {
          type: "text",
          placeholder: "Rechercher un stock",
          className: "border border-black rounded-lg p-2 my-10  w-1/3"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/inventaire.jsx",
          lineNumber: 70,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(
        "div",
        {
          className: " absolute left-[64%] inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ",
          role: "status"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/inventaire.jsx",
          lineNumber: 75,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/inventaire.jsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6", children: [
      {
        id: 1,
        nom: "Stock 1",
        quantite: 10,
        valeur: 100
      },
      {
        id: 2,
        nom: "Stock 2",
        quantite: 20,
        valeur: 200
      },
      {
        id: 3,
        nom: "Stock 3",
        quantite: 30,
        valeur: 300
      },
      {
        id: 4,
        nom: "Stock 4",
        quantite: 40,
        valeur: 400
      },
      {
        id: 5,
        nom: "Stock 5",
        quantite: 50,
        valeur: 500
      },
      {
        id: 6,
        nom: "Stock 6",
        quantite: 60,
        valeur: 600
      },
      {
        id: 7,
        nom: "Stock 7",
        quantite: 70,
        valeur: 700
      },
      {
        id: 8,
        nom: "Stock 8",
        quantite: 80,
        valeur: 800
      },
      {
        id: 9,
        nom: "Stock 9",
        quantite: 90,
        valeur: 900
      },
      {
        id: 10,
        nom: "Stock 10",
        quantite: 100,
        valeur: 1e3
      }
    ].map((stock) => /* @__PURE__ */ jsxDEV5(
      CarteStock,
      {
        nom: stock.nom,
        quantite: stock.quantite,
        valeur: stock.valeur
      },
      stock.id,
      !1,
      {
        fileName: "app/routes/inventaire.jsx",
        lineNumber: 82,
        columnNumber: 21
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/inventaire.jsx",
      lineNumber: 80,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/inventaire.jsx",
    lineNumber: 68,
    columnNumber: 9
  }, this);
}

// app/routes/creation.tsx
var creation_exports = {};
__export(creation_exports, {
  action: () => action,
  default: () => creation
});
import { Form, useActionData } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function creation() {
  let data = useActionData();
  return /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-center content-center h-screen", children: /* @__PURE__ */ jsxDEV6("div", { className: " mt-8 w-auto h-1/2 overflow-hidden shadow-xl p-10 rounded-3xl border border-black", children: [
    /* @__PURE__ */ jsxDEV6("h1", { className: "justify-center text-2xl text-center pb-6", children: "Cr\xE9ation de stock" }, void 0, !1, {
      fileName: "app/routes/creation.tsx",
      lineNumber: 12,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV6(Form, { method: "post", children: [
      /* @__PURE__ */ jsxDEV6("label", { className: "block", children: [
        /* @__PURE__ */ jsxDEV6("span", { className: "text-gray-700", children: "Nom" }, void 0, !1, {
          fileName: "app/routes/creation.tsx",
          lineNumber: 17,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV6(
          "input",
          {
            type: "text",
            name: "name",
            placeholder: "nom de l'entreprise",
            className: "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 mb-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/creation.tsx",
            lineNumber: 18,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/creation.tsx",
        lineNumber: 16,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV6("label", { className: "block", children: [
        /* @__PURE__ */ jsxDEV6("span", { className: "text-gray-700", children: "Montant" }, void 0, !1, {
          fileName: "app/routes/creation.tsx",
          lineNumber: 27,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV6(
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
          !1,
          {
            fileName: "app/routes/creation.tsx",
            lineNumber: 28,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/creation.tsx",
        lineNumber: 26,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV6("label", { className: "block", children: [
        /* @__PURE__ */ jsxDEV6("span", { className: "text-gray-700", children: "Quantit\xE9" }, void 0, !1, {
          fileName: "app/routes/creation.tsx",
          lineNumber: 39,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV6(
          "input",
          {
            min: "0",
            type: "number",
            name: "quantity",
            placeholder: "quantit\xE9 disponible",
            className: "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 mb-5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/creation.tsx",
            lineNumber: 40,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/creation.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV6(
        "button",
        {
          type: "button",
          className: " m-3  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
          children: "Valider"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/creation.tsx",
          lineNumber: 49,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/creation.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/creation.tsx",
      lineNumber: 15,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/creation.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/creation.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}
async function action({ request }) {
  let formData = await request.formData(), name = formData.get("name"), price = formData.get("price"), quantity = formData.get("quantity");
  if (name !== null && price !== null && quantity !== null)
    return redirect("/");
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-YVE473PI.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-KVHT5J35.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-XCPIC3OD.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PL5BARCZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/creation": { id: "routes/creation", parentId: "root", path: "creation", index: void 0, caseSensitive: void 0, module: "/build/routes/creation-XPOINUI5.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/inventaire": { id: "routes/inventaire", parentId: "root", path: "inventaire", index: void 0, caseSensitive: void 0, module: "/build/routes/inventaire-ZFA5J2VC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/inventaire.$idstock": { id: "routes/inventaire.$idstock", parentId: "routes/inventaire", path: ":idstock", index: void 0, caseSensitive: void 0, module: "/build/routes/inventaire.$idstock-RFHGJDO2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "acbe7095", hmr: { runtime: "/build/_shared/chunk-XCPIC3OD.js", timestamp: 1709237698369 }, url: "/build/manifest-ACBE7095.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/inventaire.$idstock": {
    id: "routes/inventaire.$idstock",
    parentId: "routes/inventaire",
    path: ":idstock",
    index: void 0,
    caseSensitive: void 0,
    module: inventaire_idstock_exports
  },
  "routes/inventaire": {
    id: "routes/inventaire",
    parentId: "root",
    path: "inventaire",
    index: void 0,
    caseSensitive: void 0,
    module: inventaire_exports
  },
  "routes/creation": {
    id: "routes/creation",
    parentId: "root",
    path: "creation",
    index: void 0,
    caseSensitive: void 0,
    module: creation_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
