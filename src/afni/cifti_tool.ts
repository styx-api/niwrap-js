// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CIFTI_TOOL_METADATA: Metadata = {
    id: "d35c1bdf886b6ca8faed8f62946bf8ec095c0a8c.boutiques",
    name: "cifti_tool",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface CiftiToolParameters {
    "__STYXTYPE__": "cifti_tool";
    "input_file": InputPathType;
    "as_cext": boolean;
    "disp_cext": boolean;
    "eval_cext": boolean;
    "eval_type"?: "has_data" | "has_bdata" | "num_tokens" | "show" | "show_names" | "show_summary" | "show_text_data" | null | undefined;
    "output_file"?: string | null | undefined;
    "verbose_level"?: number | null | undefined;
    "verbose_read_level"?: number | null | undefined;
    "both_verbose_levels"?: number | null | undefined;
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
        "cifti_tool": cifti_tool_cargs,
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
        "cifti_tool": cifti_tool_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `cifti_tool(...)`.
 *
 * @interface
 */
interface CiftiToolOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file for results
     */
    output_file: OutputPathType | null;
}


function cifti_tool_params(
    input_file: InputPathType,
    as_cext: boolean = false,
    disp_cext: boolean = false,
    eval_cext: boolean = false,
    eval_type: "has_data" | "has_bdata" | "num_tokens" | "show" | "show_names" | "show_summary" | "show_text_data" | null = null,
    output_file: string | null = null,
    verbose_level: number | null = null,
    verbose_read_level: number | null = null,
    both_verbose_levels: number | null = null,
): CiftiToolParameters {
    /**
     * Build parameters.
    
     * @param input_file Specify input dataset
     * @param as_cext Process the input as just an extension
     * @param disp_cext Display the CIFTI extension
     * @param eval_cext Evaluate the CIFTI extension
     * @param eval_type Method for evaluation of axml elements
     * @param output_file Where to write output
     * @param verbose_level Set the verbose level
     * @param verbose_read_level Set verbose level when reading
     * @param both_verbose_levels Apply both -verb options
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti_tool" as const,
        "input_file": input_file,
        "as_cext": as_cext,
        "disp_cext": disp_cext,
        "eval_cext": eval_cext,
    };
    if (eval_type !== null) {
        params["eval_type"] = eval_type;
    }
    if (output_file !== null) {
        params["output_file"] = output_file;
    }
    if (verbose_level !== null) {
        params["verbose_level"] = verbose_level;
    }
    if (verbose_read_level !== null) {
        params["verbose_read_level"] = verbose_read_level;
    }
    if (both_verbose_levels !== null) {
        params["both_verbose_levels"] = both_verbose_levels;
    }
    return params;
}


function cifti_tool_cargs(
    params: CiftiToolParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("cifti_tool");
    cargs.push(
        "-input",
        execution.inputFile((params["input_file"] ?? null))
    );
    if ((params["as_cext"] ?? null)) {
        cargs.push("-as_cext");
    }
    if ((params["disp_cext"] ?? null)) {
        cargs.push("-disp_cext");
    }
    if ((params["eval_cext"] ?? null)) {
        cargs.push("-eval_cext");
    }
    if ((params["eval_type"] ?? null) !== null) {
        cargs.push(
            "-eval_type",
            (params["eval_type"] ?? null)
        );
    }
    if ((params["output_file"] ?? null) !== null) {
        cargs.push(
            "-output",
            (params["output_file"] ?? null)
        );
    }
    if ((params["verbose_level"] ?? null) !== null) {
        cargs.push(
            "-verb",
            String((params["verbose_level"] ?? null))
        );
    }
    if ((params["verbose_read_level"] ?? null) !== null) {
        cargs.push(
            "-verb_read",
            String((params["verbose_read_level"] ?? null))
        );
    }
    if ((params["both_verbose_levels"] ?? null) !== null) {
        cargs.push(
            "-vboth",
            String((params["both_verbose_levels"] ?? null))
        );
    }
    return cargs;
}


function cifti_tool_outputs(
    params: CiftiToolParameters,
    execution: Execution,
): CiftiToolOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CiftiToolOutputs = {
        root: execution.outputFile("."),
        output_file: ((params["output_file"] ?? null) !== null) ? execution.outputFile([(params["output_file"] ?? null)].join('')) : null,
    };
    return ret;
}


function cifti_tool_execute(
    params: CiftiToolParameters,
    execution: Execution,
): CiftiToolOutputs {
    /**
     * Example tool for reading/writing CIFTI-2 datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CiftiToolOutputs`).
     */
    params = execution.params(params)
    const cargs = cifti_tool_cargs(params, execution)
    const ret = cifti_tool_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cifti_tool(
    input_file: InputPathType,
    as_cext: boolean = false,
    disp_cext: boolean = false,
    eval_cext: boolean = false,
    eval_type: "has_data" | "has_bdata" | "num_tokens" | "show" | "show_names" | "show_summary" | "show_text_data" | null = null,
    output_file: string | null = null,
    verbose_level: number | null = null,
    verbose_read_level: number | null = null,
    both_verbose_levels: number | null = null,
    runner: Runner | null = null,
): CiftiToolOutputs {
    /**
     * Example tool for reading/writing CIFTI-2 datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_file Specify input dataset
     * @param as_cext Process the input as just an extension
     * @param disp_cext Display the CIFTI extension
     * @param eval_cext Evaluate the CIFTI extension
     * @param eval_type Method for evaluation of axml elements
     * @param output_file Where to write output
     * @param verbose_level Set the verbose level
     * @param verbose_read_level Set verbose level when reading
     * @param both_verbose_levels Apply both -verb options
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CiftiToolOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CIFTI_TOOL_METADATA);
    const params = cifti_tool_params(input_file, as_cext, disp_cext, eval_cext, eval_type, output_file, verbose_level, verbose_read_level, both_verbose_levels)
    return cifti_tool_execute(params, execution);
}


export {
      CIFTI_TOOL_METADATA,
      CiftiToolOutputs,
      CiftiToolParameters,
      cifti_tool,
      cifti_tool_params,
};
