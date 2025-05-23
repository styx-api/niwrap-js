// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSL_BOXPLOT_METADATA: Metadata = {
    id: "cc8df2c2f3c12b3005cb31dda7546753717126f5.boutiques",
    name: "fsl_boxplot",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslBoxplotParameters {
    "__STYXTYPE__": "fsl_boxplot";
    "input_files": Array<InputPathType>;
    "output_image": string;
    "help_flag": boolean;
    "title"?: string | null | undefined;
    "legend_file"?: InputPathType | null | undefined;
    "x_label"?: string | null | undefined;
    "y_label"?: string | null | undefined;
    "plot_height"?: number | null | undefined;
    "plot_width"?: number | null | undefined;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "fsl_boxplot": fsl_boxplot_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "fsl_boxplot": fsl_boxplot_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsl_boxplot(...)`.
 *
 * @interface
 */
interface FslBoxplotOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output boxplot image in PNG format
     */
    output_png: OutputPathType;
}


function fsl_boxplot_params(
    input_files: Array<InputPathType>,
    output_image: string,
    help_flag: boolean = false,
    title: string | null = null,
    legend_file: InputPathType | null = null,
    x_label: string | null = null,
    y_label: string | null = null,
    plot_height: number | null = 450,
    plot_width: number | null = null,
): FslBoxplotParameters {
    /**
     * Build parameters.
    
     * @param input_files Comma-separated list of input file names (ASCII text matrices, one column per boxplot)
     * @param output_image Output filename for the PNG file
     * @param help_flag Display this help message
     * @param title Plot title
     * @param legend_file File name of ASCII text file, one row per legend entry
     * @param x_label X-axis label
     * @param y_label Y-axis label
     * @param plot_height Plot height in pixels (default 450)
     * @param plot_width Plot width in pixels (default 80*#boxplots)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsl_boxplot" as const,
        "input_files": input_files,
        "output_image": output_image,
        "help_flag": help_flag,
    };
    if (title !== null) {
        params["title"] = title;
    }
    if (legend_file !== null) {
        params["legend_file"] = legend_file;
    }
    if (x_label !== null) {
        params["x_label"] = x_label;
    }
    if (y_label !== null) {
        params["y_label"] = y_label;
    }
    if (plot_height !== null) {
        params["plot_height"] = plot_height;
    }
    if (plot_width !== null) {
        params["plot_width"] = plot_width;
    }
    return params;
}


function fsl_boxplot_cargs(
    params: FslBoxplotParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsl_boxplot");
    cargs.push(
        "--in",
        ...(params["input_files"] ?? null).map(f => execution.inputFile(f))
    );
    cargs.push(
        "--out",
        (params["output_image"] ?? null)
    );
    if ((params["help_flag"] ?? null)) {
        cargs.push("--help");
    }
    if ((params["title"] ?? null) !== null) {
        cargs.push(
            "--title",
            (params["title"] ?? null)
        );
    }
    if ((params["legend_file"] ?? null) !== null) {
        cargs.push(
            "--legend",
            execution.inputFile((params["legend_file"] ?? null))
        );
    }
    if ((params["x_label"] ?? null) !== null) {
        cargs.push(
            "--xlabel",
            (params["x_label"] ?? null)
        );
    }
    if ((params["y_label"] ?? null) !== null) {
        cargs.push(
            "--ylabel",
            (params["y_label"] ?? null)
        );
    }
    if ((params["plot_height"] ?? null) !== null) {
        cargs.push(
            "--height",
            String((params["plot_height"] ?? null))
        );
    }
    if ((params["plot_width"] ?? null) !== null) {
        cargs.push(
            "--width",
            String((params["plot_width"] ?? null))
        );
    }
    return cargs;
}


function fsl_boxplot_outputs(
    params: FslBoxplotParameters,
    execution: Execution,
): FslBoxplotOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslBoxplotOutputs = {
        root: execution.outputFile("."),
        output_png: execution.outputFile([(params["output_image"] ?? null), ".png"].join('')),
    };
    return ret;
}


function fsl_boxplot_execute(
    params: FslBoxplotParameters,
    execution: Execution,
): FslBoxplotOutputs {
    /**
     * Tool for creating boxplot images from ASCII text matrices.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslBoxplotOutputs`).
     */
    params = execution.params(params)
    const cargs = fsl_boxplot_cargs(params, execution)
    const ret = fsl_boxplot_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsl_boxplot(
    input_files: Array<InputPathType>,
    output_image: string,
    help_flag: boolean = false,
    title: string | null = null,
    legend_file: InputPathType | null = null,
    x_label: string | null = null,
    y_label: string | null = null,
    plot_height: number | null = 450,
    plot_width: number | null = null,
    runner: Runner | null = null,
): FslBoxplotOutputs {
    /**
     * Tool for creating boxplot images from ASCII text matrices.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_files Comma-separated list of input file names (ASCII text matrices, one column per boxplot)
     * @param output_image Output filename for the PNG file
     * @param help_flag Display this help message
     * @param title Plot title
     * @param legend_file File name of ASCII text file, one row per legend entry
     * @param x_label X-axis label
     * @param y_label Y-axis label
     * @param plot_height Plot height in pixels (default 450)
     * @param plot_width Plot width in pixels (default 80*#boxplots)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslBoxplotOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSL_BOXPLOT_METADATA);
    const params = fsl_boxplot_params(input_files, output_image, help_flag, title, legend_file, x_label, y_label, plot_height, plot_width)
    return fsl_boxplot_execute(params, execution);
}


export {
      FSL_BOXPLOT_METADATA,
      FslBoxplotOutputs,
      FslBoxplotParameters,
      fsl_boxplot,
      fsl_boxplot_params,
};
