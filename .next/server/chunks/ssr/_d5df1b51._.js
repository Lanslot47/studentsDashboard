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
"[project]/app/Name.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const adminName = 'ISHAQ';
const __TURBOPACK__default__export__ = adminName;
}}),
"[project]/app/(home)/admin/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2f$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/demo/list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Name$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Name.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const AdminPage = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [studentId, setStudentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [admin, setAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [studentName, setStudentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleAdmin = (e)=>{
        e.preventDefault();
        let found = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2f$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["students"].map((std)=>std);
        let adminKey = 'Password';
        if (adminKey == studentId && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Name$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] == studentName) {
            setAdmin(found);
            setError('');
            router.push('../demo');
        } else {
            setError('Enter correct UserName/Password');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "div",
            className: "max-w-md h-full p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-4",
                    children: "Enter Admin Key"
                }, void 0, false, {
                    fileName: "[project]/app/(home)/admin/page.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleAdmin,
                    className: "space-y-4 ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            id: "one",
                            placeholder: "Enter Username",
                            value: studentName,
                            onChange: (e)=>setStudentName(e.target.value),
                            className: "w-full p-2 border rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/(home)/admin/page.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: "Enter your Password",
                            value: studentId,
                            onChange: (e)=>setStudentId(e.target.value),
                            className: "w-full p-2 border rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/(home)/admin/page.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-full text-white p-2 rounded bg-green-600 cursor-pointer",
                            children: "View Info"
                        }, void 0, false, {
                            fileName: "[project]/app/(home)/admin/page.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(home)/admin/page.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-blue-500 font-bold text-1xl",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/(home)/admin/page.tsx",
                    lineNumber: 39,
                    columnNumber: 27
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(home)/admin/page.tsx",
            lineNumber: 30,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = AdminPage;
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_d5df1b51._.js.map