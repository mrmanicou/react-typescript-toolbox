import Base from "../Base/Base"
import File from "../../Models/File/File"
import Options, { StyleSheetOptions } from "../../Options/Options"

export default class Component extends Base {
    static create(path: string, name: string): File {
        const file = new File()

        file.content = Component.createContent(name)
        file.type = "tsx"
        file.name = name
        file.path = path

        return file
    }

    private static createContent(name: string) {
        const style = Options.styleSheet
        const s = Component.getSeparator()

        let result = `import * as React from "react"\n`
        result += `\n`

        if (style !== StyleSheetOptions.None) {
            result += `/** Stylesheet Imports */\n`
            result += `import "./${name}.${style}"\n`
            result += `\n`
        }

        result += `export interface Props {\n`
        result += `${s}children?: React.ReactNode\n`
        result += `}\n`
        result += `\n`
        result += `export interface State {\n`
        result += `}\n`
        result += `\n`
        result += `export default class ${name} extends React.Component<Props, State> {\n`
        result += `\n`
        result += `${s}constructor(props: Props) {\n`
        result += `${s}${s}super(props)\n\n`
        result += `${s}${s}this.state = {\n`
        result += `${s}${s}}\n`
        result += `${s}}\n`
        result += `\n`
        result += `${s}render() {\n`
        result += `${s}${s}return (\n`
        result += `${s}${s}${s}<div>{ this.props.children }</div>\n`
        result += `${s}${s})\n`
        result += `${s}}\n`
        result += `}\n`
        return result
    }
}