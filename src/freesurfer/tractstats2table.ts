// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TRACTSTATS2TABLE_METADATA: Metadata = {
    id: "deb2a42839930436dbac59d0fe2517f06e878809.boutiques",
    name: "tractstats2table",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface Tractstats2tableParameters {
    "__STYXTYPE__": "tractstats2table";
    "inputs"?: Array<string> | null | undefined;
    "load_pathstats_from_file"?: InputPathType | null | undefined;
    "overall": boolean;
    "byvoxel": boolean;
    "byvoxel_measure"?: "AD" | "RD" | "MD" | "FA" | null | undefined;
    "tablefile": InputPathType;
    "delimiter"?: "tab" | "comma" | "space" | "semicolon" | null | undefined;
    "transpose": boolean;
    "debug": boolean;
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
        "tractstats2table": tractstats2table_cargs,
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
        "tractstats2table": tractstats2table_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `tractstats2table(...)`.
 *
 * @interface
 */
interface Tractstats2tableOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output table file.
     */
    output_tablefile: OutputPathType;
}


function tractstats2table_params(
    tablefile: InputPathType,
    inputs: Array<string> | null = null,
    load_pathstats_from_file: InputPathType | null = null,
    overall: boolean = false,
    byvoxel: boolean = false,
    byvoxel_measure: "AD" | "RD" | "MD" | "FA" | null = null,
    delimiter: "tab" | "comma" | "space" | "semicolon" | null = "tab",
    transpose: boolean = false,
    debug: boolean = false,
): Tractstats2tableParameters {
    /**
     * Build parameters.
    
     * @param tablefile The output table file.
     * @param inputs Specify input stat files.
     * @param load_pathstats_from_file Name of the file which has the list of subjects (one subject per line).
     * @param overall Operate on the overall path statistics.
     * @param byvoxel Operate on the byvoxel path statistics.
     * @param byvoxel_measure Specify byvoxel measure. One of [AD, RD, MD, FA]. Required with --byvoxel option.
     * @param delimiter Delimiter between measures in the table. Default is tab (alt comma, space, semicolon).
     * @param transpose Transpose the table (default is subject in rows and measures/count in cols).
     * @param debug Increase verbosity.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "tractstats2table" as const,
        "overall": overall,
        "byvoxel": byvoxel,
        "tablefile": tablefile,
        "transpose": transpose,
        "debug": debug,
    };
    if (inputs !== null) {
        params["inputs"] = inputs;
    }
    if (load_pathstats_from_file !== null) {
        params["load_pathstats_from_file"] = load_pathstats_from_file;
    }
    if (byvoxel_measure !== null) {
        params["byvoxel_measure"] = byvoxel_measure;
    }
    if (delimiter !== null) {
        params["delimiter"] = delimiter;
    }
    return params;
}


function tractstats2table_cargs(
    params: Tractstats2tableParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tractstats2table");
    if ((params["inputs"] ?? null) !== null) {
        cargs.push(
            "--inputs",
            ...(params["inputs"] ?? null)
        );
    }
    if ((params["load_pathstats_from_file"] ?? null) !== null) {
        cargs.push(
            "--load-pathstats-from-file",
            execution.inputFile((params["load_pathstats_from_file"] ?? null))
        );
    }
    if ((params["overall"] ?? null)) {
        cargs.push("-o");
    }
    if ((params["byvoxel"] ?? null)) {
        cargs.push("-b");
    }
    if ((params["byvoxel_measure"] ?? null) !== null) {
        cargs.push(
            "--byvoxel-measure",
            (params["byvoxel_measure"] ?? null)
        );
    }
    cargs.push(
        "-t",
        execution.inputFile((params["tablefile"] ?? null))
    );
    if ((params["delimiter"] ?? null) !== null) {
        cargs.push(
            "-d",
            (params["delimiter"] ?? null)
        );
    }
    if ((params["transpose"] ?? null)) {
        cargs.push("--transpose");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-v");
    }
    return cargs;
}


function tractstats2table_outputs(
    params: Tractstats2tableParameters,
    execution: Execution,
): Tractstats2tableOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Tractstats2tableOutputs = {
        root: execution.outputFile("."),
        output_tablefile: execution.outputFile([path.basename((params["tablefile"] ?? null))].join('')),
    };
    return ret;
}


function tractstats2table_execute(
    params: Tractstats2tableParameters,
    execution: Execution,
): Tractstats2tableOutputs {
    /**
     * Converts a track overall stats file created by tracula into a table used for group statistics.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Tractstats2tableOutputs`).
     */
    params = execution.params(params)
    const cargs = tractstats2table_cargs(params, execution)
    const ret = tractstats2table_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tractstats2table(
    tablefile: InputPathType,
    inputs: Array<string> | null = null,
    load_pathstats_from_file: InputPathType | null = null,
    overall: boolean = false,
    byvoxel: boolean = false,
    byvoxel_measure: "AD" | "RD" | "MD" | "FA" | null = null,
    delimiter: "tab" | "comma" | "space" | "semicolon" | null = "tab",
    transpose: boolean = false,
    debug: boolean = false,
    runner: Runner | null = null,
): Tractstats2tableOutputs {
    /**
     * Converts a track overall stats file created by tracula into a table used for group statistics.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param tablefile The output table file.
     * @param inputs Specify input stat files.
     * @param load_pathstats_from_file Name of the file which has the list of subjects (one subject per line).
     * @param overall Operate on the overall path statistics.
     * @param byvoxel Operate on the byvoxel path statistics.
     * @param byvoxel_measure Specify byvoxel measure. One of [AD, RD, MD, FA]. Required with --byvoxel option.
     * @param delimiter Delimiter between measures in the table. Default is tab (alt comma, space, semicolon).
     * @param transpose Transpose the table (default is subject in rows and measures/count in cols).
     * @param debug Increase verbosity.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Tractstats2tableOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TRACTSTATS2TABLE_METADATA);
    const params = tractstats2table_params(tablefile, inputs, load_pathstats_from_file, overall, byvoxel, byvoxel_measure, delimiter, transpose, debug)
    return tractstats2table_execute(params, execution);
}


export {
      TRACTSTATS2TABLE_METADATA,
      Tractstats2tableOutputs,
      Tractstats2tableParameters,
      tractstats2table,
      tractstats2table_params,
};
