/**
 * Class for managing the program settings.
 */
class TypesetBotSettings {

    // Copy of the custom user settings.
    private _tsb: TypesetBot;
    private _customSettings: object;

    // ------------------------------------------------------------------------
    // SETTINGS ---------------------------------------------------------------
    // ------------------------------------------------------------------------

    // Debug mode: prints performance stats.
    debug: boolean = true;

    // Algorithm. -------------------------------------------------------------
    alignment: string = 'justify'; // Other options are 'left', 'right' and 'center'.

    hyphenPenalty      : number = 50; // Penalty for line-breaking on a hyphen
    hyphenPenaltyRagged: number = 500; // Penalty for line-breaking on a hyphen when using ragged text
    flagPenalty        : number = 3000; // Penalty when current and last line had flag value 1.
    fitnessClassDemerit: number = 3000; // Penalty when switching between ratio classes.
    demeritOffset      : number = 1; // Offset to prefer fewer lines by increasing demerit of "~zero badness lines"

    absoluteMaxRatio: number = 5; // Max adjustment ratio before we give up on finding solutions

    maxRatio: number = 2; // Maximum acceptable adjustment ratio.
    minRatio: number = -1; // Minimum acceptable adjustment ratio. Less than -1 will make the text too closely spaced.

    // Hyphen. ----------------------------------------------------------------
    hyphenLanguage: string = 'en-us'; // Language of hyphenation patterns to use
    hyphenLeftMin : number = 2; // Minimum number of letters to keep on the left side of word
    hyphenRightMin: number = 2; // Minimum number of letters to keep on the right side of word

    // 4 classes of adjustment ratios.
    fitnessClasses: number[] = [-1, -0.5, 0.5, 1, Infinity];

    // Font. ------------------------------------------------------------------
    spaceUnit          : string = 'em'; // Space width unit, em is relative to font-size
    spaceWidth         : number = 1 / 3; // Ideal space width
    spaceStretchability: number = 1 / 6; // How much can the space width stretch
    spaceShrinkability : number = 1 / 9; // How much can the space width shrink

    // Tags inside element that might break the typesetting algorithm
    unsupportedTags: string[] = ['BR', 'IMG'];

    // ------------------------------------------------------------------------

    /**
     * @param settings Optional settings object.
     */
    constructor(tsb: TypesetBot, settings: object = null) {
        this._tsb = tsb;
        this._customSettings = settings;
        this._mergeSettings(settings);
    }

    /**
     * Merge custom settings with a default set of settings.
     *
     * @param settings The custom overwrite settings
     */
    private _mergeSettings = function(settings: object = null) {
        if (settings == null) {
            return;
        }

        for (const [key, value] of Object.entries(settings)) {
            if (this[key] === undefined) {
                this._tsb.logger.warn('Unknown settings key "' + key +'"');
            }

            this[key] = value;
        }
    }
}
