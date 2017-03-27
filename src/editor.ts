/// <reference path=' ../../../node_modules/monaco-editor-core/monaco.d.ts'/>

export class EditorFactory {

    public createEditor(container: HTMLElement, value = ""): monaco.editor.IStandaloneCodeEditor {
         return monaco.editor.create(container, {
             value,
             language: "javascript"
         });
    }

}
