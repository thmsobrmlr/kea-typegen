import { ParsedLogic } from '../types'
import * as ts from 'typescript'
import {cloneNode} from "@wessberg/ts-clone-node";

export function visitSharedListeners(type: ts.Type, inputProperty: ts.PropertyAssignment, parsedLogic: ParsedLogic) {
    const { checker } = parsedLogic

    for (const property of type.getProperties()) {
        const name = property.getName()
        const value = (property.valueDeclaration as ts.PropertyAssignment).initializer

        if (value && ts.isFunctionLike(value)) {
            let typeNode
            const firstParameter = value.parameters[0]
            if (firstParameter) {
                typeNode = cloneNode(checker.typeToTypeNode(checker.getTypeAtLocation(firstParameter)))
            }

            parsedLogic.sharedListeners.push({ name, typeNode })
        }
    }
}
