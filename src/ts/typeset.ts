class TypesetBotTypeset {

    tokenizer: TypesetBotTokenizer;
    private _tsb: TypesetBot;

    /**
     * @param tsb Instance of main class
     */
    constructor(tsb: TypesetBot) {
        this._tsb = tsb;
        this.tokenizer = new TypesetBotTokenizer(tsb);
    }

    /**
     * Typeset multiple nodes.
     *
     * @parma nodes
     */
    typesetNodes = function(nodes: Element[]) {
        for (const node of nodes) {
            this.typeset(node);
        }
    }

    /**
     * Typeset single node.
     *
     * @param node
     */
    typeset = function(node: Element) {
        // Tokenize nodes and store them.
        const tokens = this.tokenizer.tokenize(node);
        this.appendToTokenMap(node, tokens);

        this._tbs.settings.loosenessParam = 0;

        // Check if node has changed content (inner nodes) since last typesetting.

        // Make a copy of node which can be worked on without breaking webpage.

        // Calculate linebreaks.
            // func().

        // Visually apply linebreaks to original element.
            // Loop final solutions and find the one with lowest demerit.
            // Construct lines.
                // Word, Tag Space
                // Close tags after each line.
                // Start unfinished tags at the beginning of each line.
            // Convert to HTML.
    }

    calcLinebreaks = function(node: Element) {

        // Set space width based on settings.

        // Init paragraph variables.
            // Copy content.
            // Get element width.
            // Preprocess nodes.
                // Tokenize.
                // Get render sizes.
                // Store these.
            // Get font size of node.
            // Calc space size.
            // Calc space shrink.
            // Calc space stretch.

            // Queue of active breakpoints[]
            // Shortest path {}
            // FinalBreaks[]
            // Counter for last rendered node.

        // Preprocess all hyphens.
            // Loop all nodes.
                // Find hyphens in word.
                // Get hyphen properties of that word.

        // Create starting node.

        // Loop until queue is empty.

            // Init line variables.
                // Check if shortest path is found.
                // Get active node index.
                // Get active hyphen index of node.

            // Calculate adjustment ratio.

            // Check if this is a valid breakpoint (not within min ratio).

                // Loop hyphen breakpoints.

                    // Get hyphen adjustment ratio.

                    // If "valid" breaking point, generate break.

                // Check if adjustment ratio is within the minimum ratio.

                // Generate break.

            // Add space width to current line with.

        // Reset node content.

        // Run linebreaking algorithm again if no solution was found.

            // Increase looseness.

        // Return calculated nodes and valid linebreak solutions.
    }


    addBreakpoint = function() {
        // Get fitness class
        // Check flagDemerit
        // Calc demerit
        // Check fitness class change.
        // Create breakpoint object.
        // Update shorted path.
    }

    checkShortestPath = function() : boolean {
        // Check if breakpoint if the lowest demerit on:
        // "specific line, with specific nodex, with specific hyphen index".
        return false;
    }

    updateShortestPath = function() {
        // If breakpoint has better demerit on "specific line, with specific nodex, with specific hyphen index".
        // Then update the breakpoint.
        // Append to active breakpoints queue.
    }

    /**
     * Add tokens to map for specific node.
     *
     * @param root
     * @param tokens
     */
    appendToTokenMap = function(root: Element, tokens: TypesetBotToken) {
        if (TypesetBotUtils.getElementIndex(root) == null) {
            this._tsb.logger.error('Root node is not indexed');
            this._tsb.logger.error(root);
            return;
        }

        const index = TypesetBotUtils.getElementIndex(root);
        this._tsb.indexToTokens[index] = tokens;
    }
}
