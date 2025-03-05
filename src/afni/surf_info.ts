// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SURF_INFO_METADATA: Metadata = {
    id: "91fa2904287da85a4df485d2f8c7ffbc9ba1a073.boutiques",
    name: "SurfInfo",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface SurfInfoParameters {
    "__STYXTYPE__": "SurfInfo";
    "surface": InputPathType;
    "com": boolean;
    "debug_level"?: number | null | undefined;
    "detail_level"?: number | null | undefined;
    "quiet": boolean;
    "separator"?: string | null | undefined;
    "input_surface"?: string | null | undefined;
    "surface_state"?: string | null | undefined;
    "surface_volume"?: InputPathType | null | undefined;
    "spec_file"?: InputPathType | null | undefined;
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
        "SurfInfo": surf_info_cargs,
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
        "SurfInfo": surf_info_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `surf_info(...)`.
 *
 * @interface
 */
interface SurfInfoOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file containing calculated surface metrics.
     */
    metrics_output: OutputPathType;
}


function surf_info_params(
    surface: InputPathType,
    com: boolean = false,
    debug_level: number | null = null,
    detail_level: number | null = null,
    quiet: boolean = false,
    separator: string | null = null,
    input_surface: string | null = null,
    surface_state: string | null = null,
    surface_volume: InputPathType | null = null,
    spec_file: InputPathType | null = null,
): SurfInfoParameters {
    /**
     * Build parameters.
    
     * @param surface Input surface file.
     * @param com Output the center of mass.
     * @param debug_level Debugging level (2 turns LocalHead ON)
     * @param detail_level Calculate surface metrics. 1=yes, 0=no
     * @param quiet Do not include the name of the parameter in output.
     * @param separator Use string SEP to separate parameter values. Default is ' ; '
     * @param input_surface Specify the input surface type and file.
     * @param surface_state Specify surface type, state, and name.
     * @param surface_volume Specify a surface volume file.
     * @param spec_file Specify a surface specification (spec) file.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "SurfInfo" as const,
        "surface": surface,
        "com": com,
        "quiet": quiet,
    };
    if (debug_level !== null) {
        params["debug_level"] = debug_level;
    }
    if (detail_level !== null) {
        params["detail_level"] = detail_level;
    }
    if (separator !== null) {
        params["separator"] = separator;
    }
    if (input_surface !== null) {
        params["input_surface"] = input_surface;
    }
    if (surface_state !== null) {
        params["surface_state"] = surface_state;
    }
    if (surface_volume !== null) {
        params["surface_volume"] = surface_volume;
    }
    if (spec_file !== null) {
        params["spec_file"] = spec_file;
    }
    return params;
}


function surf_info_cargs(
    params: SurfInfoParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("SurfInfo");
    cargs.push("[options]");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    if ((params["com"] ?? null)) {
        cargs.push("-COM");
    }
    if ((params["debug_level"] ?? null) !== null) {
        cargs.push(
            "-debug",
            String((params["debug_level"] ?? null))
        );
    }
    if ((params["detail_level"] ?? null) !== null) {
        cargs.push(
            "-detail",
            String((params["detail_level"] ?? null))
        );
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["separator"] ?? null) !== null) {
        cargs.push(
            "-sep",
            (params["separator"] ?? null)
        );
    }
    if ((params["input_surface"] ?? null) !== null) {
        cargs.push(
            "-i_TYPE",
            (params["input_surface"] ?? null)
        );
    }
    if ((params["surface_state"] ?? null) !== null) {
        cargs.push(
            "-tsn",
            (params["surface_state"] ?? null)
        );
    }
    if ((params["surface_volume"] ?? null) !== null) {
        cargs.push(
            "-sv",
            execution.inputFile((params["surface_volume"] ?? null))
        );
    }
    if ((params["spec_file"] ?? null) !== null) {
        cargs.push(
            "-spec",
            execution.inputFile((params["spec_file"] ?? null))
        );
    }
    return cargs;
}


function surf_info_outputs(
    params: SurfInfoParameters,
    execution: Execution,
): SurfInfoOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SurfInfoOutputs = {
        root: execution.outputFile("."),
        metrics_output: execution.outputFile([path.basename((params["surface"] ?? null)), "_metrics.txt"].join('')),
    };
    return ret;
}


function surf_info_execute(
    params: SurfInfoParameters,
    execution: Execution,
): SurfInfoOutputs {
    /**
     * Tool to gather information about surface files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SurfInfoOutputs`).
     */
    params = execution.params(params)
    const cargs = surf_info_cargs(params, execution)
    const ret = surf_info_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function surf_info(
    surface: InputPathType,
    com: boolean = false,
    debug_level: number | null = null,
    detail_level: number | null = null,
    quiet: boolean = false,
    separator: string | null = null,
    input_surface: string | null = null,
    surface_state: string | null = null,
    surface_volume: InputPathType | null = null,
    spec_file: InputPathType | null = null,
    runner: Runner | null = null,
): SurfInfoOutputs {
    /**
     * Tool to gather information about surface files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param surface Input surface file.
     * @param com Output the center of mass.
     * @param debug_level Debugging level (2 turns LocalHead ON)
     * @param detail_level Calculate surface metrics. 1=yes, 0=no
     * @param quiet Do not include the name of the parameter in output.
     * @param separator Use string SEP to separate parameter values. Default is ' ; '
     * @param input_surface Specify the input surface type and file.
     * @param surface_state Specify surface type, state, and name.
     * @param surface_volume Specify a surface volume file.
     * @param spec_file Specify a surface specification (spec) file.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SurfInfoOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SURF_INFO_METADATA);
    const params = surf_info_params(surface, com, debug_level, detail_level, quiet, separator, input_surface, surface_state, surface_volume, spec_file)
    return surf_info_execute(params, execution);
}


export {
      SURF_INFO_METADATA,
      SurfInfoOutputs,
      SurfInfoParameters,
      surf_info,
      surf_info_params,
};
