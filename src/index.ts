import { EditorFactory } from "./editor";
import { Foo } from "./foo";

window.onload = () => {

    const button = document.createElement("button");
    button.textContent = "Create Editor";
    document.body.appendChild(button);

    const listener = (e: Event) => {
        (<any>window).require(["vs/editor/editor.main"], () => {
            button.disabled = true;
            const container = document.createElement("div");
            container.style.height = "500px";
            container.style.widows = "500px";
            container.style.border = "border:1px solid #ccc";
            container.id = "monaco-container";
            document.body.appendChild(container);

            const editor = new EditorFactory().createEditor(container);
            editor.getModel().setValue(new Foo().append("// Some comment"));
            button.removeEventListener("click", listener);
        });
    };

    button.addEventListener("click", listener);

};
