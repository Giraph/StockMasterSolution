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
var tailwind_default = "/build/_assets/tailwind-LMLXEPHL.css";

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

// app/routes/inventaire.$search.jsx
var inventaire_search_exports = {};
__export(inventaire_search_exports, {
  resultatRecherche: () => resultatRecherche
});
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function resultatRecherche() {
  return /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4("p", { children: "test" }, void 0, !1, {
    fileName: "app/routes/inventaire.$search.jsx",
    lineNumber: 4,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/inventaire.$search.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/inventaire.jsx
var inventaire_exports = {};
__export(inventaire_exports, {
  action: () => action,
  default: () => inventaire,
  loader: () => loader
});

// app/components/carteStock.jsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function CarteStock(props) {
  return /* @__PURE__ */ jsxDEV5("div", { className: "max-w-sm  rounded-xl overflow-hidden shadow-lg p-10 m-10 border border-black min-w-max flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxDEV5("h1", { className: "font-bold text-xl mb-2 text-center", children: props.nom }, void 0, !1, {
      fileName: "app/components/carteStock.jsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { children: [
      "Quantit\xE9 : ",
      props.quantite
    ] }, void 0, !0, {
      fileName: "app/components/carteStock.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { children: [
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
import axios from "axios";
import { useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
async function loader({ params }) {
  let search = params.search;
  if (console.log(search), search)
    try {
      return (await axios.get(
        "http://localhost:8000/api/articles/search",
        {
          query: search
        }
      )).data;
    } catch (error) {
      return console.error(
        "Une erreur s'est produite lors de la r\xE9cup\xE9ration des donn\xE9es de l'API de recherche:",
        error
      ), {
        error: "Une erreur s'est produite lors de la r\xE9cup\xE9ration des donn\xE9es de l'API de recherche"
      };
    }
  else
    try {
      return (await axios.get(
        "http://localhost:8000/api/articles/"
      )).data;
    } catch (error) {
      return console.error(
        "Une erreur s'est produite lors de la r\xE9cup\xE9ration des donn\xE9es de l'API :",
        error
      ), {
        error: "Une erreur s'est produite lors de la r\xE9cup\xE9ration des donn\xE9es de l'API."
      };
    }
}
function inventaire() {
  let data = useLoaderData();
  return /* @__PURE__ */ jsxDEV6("div", { className: "flex flex-col h-full ", children: [
    /* @__PURE__ */ jsxDEV6(Form, { method: "post", children: /* @__PURE__ */ jsxDEV6("div", { className: " flex justify-center flex-row items-center", children: [
      /* @__PURE__ */ jsxDEV6(
        "input",
        {
          type: "text",
          placeholder: "Rechercher un stock",
          name: "search",
          className: "border border-black rounded-lg p-2 my-10  w-1/3"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/inventaire.jsx",
          lineNumber: 53,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6(
        "button",
        {
          type: "submit",
          className: " m-3  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
          children: "Rechercher"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/inventaire.jsx",
          lineNumber: 59,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/inventaire.jsx",
      lineNumber: 52,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/inventaire.jsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6", children: data.map((stock) => /* @__PURE__ */ jsxDEV6(
      CarteStock,
      {
        nom: stock.designation,
        quantite: stock.quantite,
        valeur: stock.prix_unitaire
      },
      stock._id,
      !1,
      {
        fileName: "app/routes/inventaire.jsx",
        lineNumber: 69,
        columnNumber: 21
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/inventaire.jsx",
      lineNumber: 67,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/inventaire.jsx",
    lineNumber: 50,
    columnNumber: 9
  }, this);
}
async function action({ request }) {
  console.log("test");
  let search = (await request.formData()).get("search");
  return redirect(`/inventaire/${search}`);
}

// app/routes/creation.tsx
var creation_exports = {};
__export(creation_exports, {
  action: () => action2,
  default: () => creation
});
import { Form as Form2 } from "@remix-run/react";
import { redirect as redirect2 } from "@remix-run/node";
import axios2 from "axios";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function creation() {
  return /* @__PURE__ */ jsxDEV7("div", { className: "flex justify-center content-center h-screen", children: /* @__PURE__ */ jsxDEV7("div", { className: " mt-8 w-auto h-1/2 overflow-hidden shadow-xl p-10 rounded-3xl border border-black", children: [
    /* @__PURE__ */ jsxDEV7("h1", { className: "justify-center text-2xl text-center pb-6", children: "Cr\xE9ation de stock" }, void 0, !1, {
      fileName: "app/routes/creation.tsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV7(Form2, { method: "post", children: [
      /* @__PURE__ */ jsxDEV7("label", { className: "block", children: [
        /* @__PURE__ */ jsxDEV7("span", { className: "text-gray-700", children: "Nom" }, void 0, !1, {
          fileName: "app/routes/creation.tsx",
          lineNumber: 18,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV7(
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
            lineNumber: 19,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/creation.tsx",
        lineNumber: 17,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV7("label", { className: "block", children: [
        /* @__PURE__ */ jsxDEV7("span", { className: "text-gray-700", children: "Montant" }, void 0, !1, {
          fileName: "app/routes/creation.tsx",
          lineNumber: 28,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV7(
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
            lineNumber: 29,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/creation.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV7("label", { className: "block", children: [
        /* @__PURE__ */ jsxDEV7("span", { className: "text-gray-700", children: "Quantit\xE9" }, void 0, !1, {
          fileName: "app/routes/creation.tsx",
          lineNumber: 40,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV7(
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
            lineNumber: 41,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/creation.tsx",
        lineNumber: 39,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV7(
        "button",
        {
          type: "submit",
          className: " m-3  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
          children: "Valider"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/creation.tsx",
          lineNumber: 50,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/creation.tsx",
        lineNumber: 49,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/creation.tsx",
      lineNumber: 16,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/creation.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/creation.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}
async function action2({ request }) {
  let formData = await request.formData(), name = formData.get("name"), price = formData.get("price"), quantity = formData.get("quantity");
  if (name && price && quantity) {
    try {
      axios2.post("http://localhost:8000/api/articles/", {
        designation: name,
        prix_unitaire: price,
        quantite: quantity
      });
    } catch {
    }
    return redirect2("/inventaire");
  } else
    return console.error("Les donn\xE9es du formulaire sont incompl\xE8tes."), redirect2("/erreur");
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-FUXN65U2.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-XDZREXSE.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-OFC4SBVT.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RVXHE6KJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/creation": { id: "routes/creation", parentId: "root", path: "creation", index: void 0, caseSensitive: void 0, module: "/build/routes/creation-3S7OX7BU.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/inventaire": { id: "routes/inventaire", parentId: "root", path: "inventaire", index: void 0, caseSensitive: void 0, module: "/build/routes/inventaire-XWRCPAUI.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/inventaire.$search": { id: "routes/inventaire.$search", parentId: "routes/inventaire", path: ":search", index: void 0, caseSensitive: void 0, module: "/build/routes/inventaire.$search-QXJWJT5W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "923a48e1", hmr: { runtime: "/build/_shared/chunk-OFC4SBVT.js", timestamp: 1709246120151 }, url: "/build/manifest-923A48E1.js" };

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
  "routes/inventaire.$search": {
    id: "routes/inventaire.$search",
    parentId: "routes/inventaire",
    path: ":search",
    index: void 0,
    caseSensitive: void 0,
    module: inventaire_search_exports
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
