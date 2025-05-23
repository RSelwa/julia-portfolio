import { TSESTree } from "@typescript-eslint/utils"
import { Rule } from "eslint"

const rule: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Require 'use client' at the top if motion components are used"
    },
    schema: []
  },
  create(context) {
    let hasUseClient = false
    let motionUsed = false

    return {
      Program(node: TSESTree.Program) {
        const sourceCode = context.getSourceCode()
        const lines = sourceCode.lines
        // Check if the first non-empty, non-comment line is 'use client'
        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed || trimmed.startsWith("//") || trimmed.startsWith("/*"))
            continue
          if (trimmed === '"use client"' || trimmed === "'use client'") {
            hasUseClient = true
          }
          break
        }
      },
      JSXOpeningElement(node: TSESTree.JSXOpeningElement) {
        if (
          node.name.type === "JSXMemberExpression" &&
          node.name.object.type === "JSXIdentifier" &&
          node.name.object.name === "motion"
        ) {
          motionUsed = true
        }
      },
      "Program:exit"(node: TSESTree.Program) {
        if (motionUsed && !hasUseClient) {
          context.report({
            node,
            message:
              "File uses <motion.> components but is missing 'use client' at the top."
          })
        }
      }
    }
  }
}

export = rule
