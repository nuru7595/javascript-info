import{j as e}from"./index-BOxrgFY-.js";import{C as r}from"./Common-Hro9JpFq.js";function n({title:t}){const a={title:t,points:["The “script” tag","Modern markup","External scripts"],summary:["We can use a <script> tag to add JavaScript code to a page.","The type and language attributes are not required.",'A script in an external file can be inserted with <script src="path/to/script.js"><\/script>.'],tasks:[{name:"Show an alert",task:`Create a page that shows a message "I'am JavaScript!".`,code:{script:[`alert("I'm JavaScript!");`],func:()=>alert("I'am JavaScript!")}},{name:"Show an alert with an external script",task:"Take the solution of the previous task Show an alert. Modify it by extracting the script content into an external file alert.js, residing in the same folder.",code:"Nothing Special, Skipped!"}]};return e.jsx(r,{obj:a})}export{n as default};