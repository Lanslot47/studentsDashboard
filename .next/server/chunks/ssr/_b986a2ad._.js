module.exports = {

"[project]/app/demo/list.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "students": (()=>students)
});
const students = [
    {
        id: '101',
        name: "Amina Yusuf",
        age: 15,
        class: 'SS1'
    },
    {
        id: '102',
        name: "Ishaq Auwal",
        age: 14,
        class: 'SS1'
    },
    {
        id: '103',
        name: "Sa'ad Yahya",
        age: 16,
        class: 'SS1'
    },
    {
        id: '104',
        name: "Hussain Isa",
        age: 13,
        class: 'SS1'
    },
    {
        id: '105',
        name: "Usman Dahir",
        age: 14,
        class: 'SS1'
    },
    {
        id: '106',
        name: "Aliyu Tahir",
        age: 13,
        class: 'SS1'
    },
    {
        id: '107',
        name: "Bahir Auwal",
        age: 14,
        class: 'SS1'
    },
    {
        id: '108',
        name: "Sa'ad Yahya",
        age: 15,
        class: 'SS1'
    },
    {
        id: '109',
        name: "Karimatu yur",
        age: 14,
        class: 'SS1'
    },
    /////ss2
    {
        id: '110',
        name: "Abdulhalim Yusuf",
        age: 17,
        class: 'SS2'
    },
    {
        id: '112',
        name: "Abdulmalik Salis",
        age: 15,
        class: 'SS2'
    },
    {
        id: '113',
        name: "Hussain M Bello",
        age: 17,
        class: 'SS2'
    },
    {
        id: '114',
        name: "Hassan M. Bello",
        age: 15,
        class: 'SS2'
    },
    {
        id: '115',
        name: "Munib Sagir",
        age: 14,
        class: 'SS2'
    },
    {
        id: '116',
        name: "Mukhtar Ibrahim",
        age: 15,
        class: 'SS2'
    },
    {
        id: '117',
        name: "Ibrahim Sagir",
        age: 15,
        class: 'SS2'
    },
    {
        id: '118',
        name: "Ibrahim Yahya",
        age: 17,
        class: 'SS2'
    },
    {
        id: '119',
        name: "Aliyu Abdullahi",
        age: 16,
        class: 'SS2'
    }
];
}}),
"[project]/app/demo/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2f$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/demo/list.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const Result = ()=>{
    const [selectedClass, setSelectedClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const filteredStudents = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2f$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["students"].filter((student)=>student.class.toLowerCase() === selectedClass.toLowerCase());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 h-full w-[85vw] rounded-2xl shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Hello "
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl",
                        children: "Search Students by Class"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Type Class(e.g., ss1)",
                        className: "border p-2 mb-4 w-full max-w-sm",
                        value: selectedClass,
                        onChange: (e)=>setSelectedClass(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc ml-6",
                        children: filteredStudents.map((student, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    student.name,
                                    " (",
                                    student.class,
                                    ")"
                                ]
                            }, index, true, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 16,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Result;
 // appright
 // firebase
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_b986a2ad._.js.map