// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const WHIRLGIF_METADATA: Metadata = {
    id: "5014f57fafa702ba3b19014ba3566e92f5e47369.boutiques",
    name: "whirlgif",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface WhirlgifParameters {
    "__STYXTYPE__": "whirlgif";
    "outfile"?: InputPathType | null | undefined;
    "loop_count"?: number | null | undefined;
    "delay_time"?: number | null | undefined;
    "disp_flag"?: "none" | "back" | "prev" | "not" | null | undefined;
    "list_file"?: InputPathType | null | undefined;
    "input_files": Array<InputPathType>;
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
        "whirlgif": whirlgif_cargs,
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
        "whirlgif": whirlgif_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `whirlgif(...)`.
 *
 * @interface
 */
interface WhirlgifOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The generated GIF animation
     */
    output_file: OutputPathType | null;
}


function whirlgif_params(
    input_files: Array<InputPathType>,
    outfile: InputPathType | null = null,
    loop_count: number | null = null,
    delay_time: number | null = null,
    disp_flag: "none" | "back" | "prev" | "not" | null = null,
    list_file: InputPathType | null = null,
): WhirlgifParameters {
    /**
     * Build parameters.
    
     * @param input_files Input image files for the animation
     * @param outfile Specify the output file
     * @param loop_count Specify the loop count for the animation
     * @param delay_time Specify the delay time between frames
     * @param disp_flag Specify the disposal method for frames
     * @param list_file Input list file containing names of images to be used for animation
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "whirlgif" as const,
        "input_files": input_files,
    };
    if (outfile !== null) {
        params["outfile"] = outfile;
    }
    if (loop_count !== null) {
        params["loop_count"] = loop_count;
    }
    if (delay_time !== null) {
        params["delay_time"] = delay_time;
    }
    if (disp_flag !== null) {
        params["disp_flag"] = disp_flag;
    }
    if (list_file !== null) {
        params["list_file"] = list_file;
    }
    return params;
}


function whirlgif_cargs(
    params: WhirlgifParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("whirlgif");
    if ((params["outfile"] ?? null) !== null) {
        cargs.push(
            "-o",
            execution.inputFile((params["outfile"] ?? null))
        );
    }
    if ((params["loop_count"] ?? null) !== null) {
        cargs.push(
            "-loop",
            String((params["loop_count"] ?? null))
        );
    }
    if ((params["delay_time"] ?? null) !== null) {
        cargs.push(
            "-time",
            String((params["delay_time"] ?? null))
        );
    }
    if ((params["disp_flag"] ?? null) !== null) {
        cargs.push(
            "-disp",
            (params["disp_flag"] ?? null)
        );
    }
    if ((params["list_file"] ?? null) !== null) {
        cargs.push(
            "-i",
            execution.inputFile((params["list_file"] ?? null))
        );
    }
    cargs.push(...(params["input_files"] ?? null).map(f => execution.inputFile(f)));
    return cargs;
}


function whirlgif_outputs(
    params: WhirlgifParameters,
    execution: Execution,
): WhirlgifOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: WhirlgifOutputs = {
        root: execution.outputFile("."),
        output_file: ((params["outfile"] ?? null) !== null) ? execution.outputFile([path.basename((params["outfile"] ?? null))].join('')) : null,
    };
    return ret;
}


function whirlgif_execute(
    params: WhirlgifParameters,
    execution: Execution,
): WhirlgifOutputs {
    /**
     * GIF animation tool.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `WhirlgifOutputs`).
     */
    params = execution.params(params)
    const cargs = whirlgif_cargs(params, execution)
    const ret = whirlgif_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function whirlgif(
    input_files: Array<InputPathType>,
    outfile: InputPathType | null = null,
    loop_count: number | null = null,
    delay_time: number | null = null,
    disp_flag: "none" | "back" | "prev" | "not" | null = null,
    list_file: InputPathType | null = null,
    runner: Runner | null = null,
): WhirlgifOutputs {
    /**
     * GIF animation tool.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_files Input image files for the animation
     * @param outfile Specify the output file
     * @param loop_count Specify the loop count for the animation
     * @param delay_time Specify the delay time between frames
     * @param disp_flag Specify the disposal method for frames
     * @param list_file Input list file containing names of images to be used for animation
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `WhirlgifOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(WHIRLGIF_METADATA);
    const params = whirlgif_params(input_files, outfile, loop_count, delay_time, disp_flag, list_file)
    return whirlgif_execute(params, execution);
}


export {
      WHIRLGIF_METADATA,
      WhirlgifOutputs,
      WhirlgifParameters,
      whirlgif,
      whirlgif_params,
};
