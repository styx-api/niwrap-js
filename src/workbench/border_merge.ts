// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const BORDER_MERGE_METADATA: Metadata = {
    id: "b78808fafe6b76e1dfc48d8e5c0856430f0c2bb6.boutiques",
    name: "border-merge",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface BorderMergeUpToParameters {
    "__STYXTYPE__": "up_to";
    "last_border": string;
    "opt_reverse": boolean;
}


interface BorderMergeSelectParameters {
    "__STYXTYPE__": "select";
    "border": string;
    "up_to"?: BorderMergeUpToParameters | null | undefined;
}


interface BorderMergeBorderParameters {
    "__STYXTYPE__": "border";
    "border_file_in": InputPathType;
    "select"?: Array<BorderMergeSelectParameters> | null | undefined;
}


interface BorderMergeParameters {
    "__STYXTYPE__": "border-merge";
    "border_file_out": string;
    "border"?: Array<BorderMergeBorderParameters> | null | undefined;
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
        "border-merge": border_merge_cargs,
        "border": border_merge_border_cargs,
        "select": border_merge_select_cargs,
        "up_to": border_merge_up_to_cargs,
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
        "border-merge": border_merge_outputs,
    };
    return outputsFuncs[t];
}


function border_merge_up_to_params(
    last_border: string,
    opt_reverse: boolean = false,
): BorderMergeUpToParameters {
    /**
     * Build parameters.
    
     * @param last_border the number or name of the last column to include
     * @param opt_reverse use the range in reverse order
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "up_to" as const,
        "last_border": last_border,
        "opt_reverse": opt_reverse,
    };
    return params;
}


function border_merge_up_to_cargs(
    params: BorderMergeUpToParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-up-to");
    cargs.push((params["last_border"] ?? null));
    if ((params["opt_reverse"] ?? null)) {
        cargs.push("-reverse");
    }
    return cargs;
}


function border_merge_select_params(
    border: string,
    up_to: BorderMergeUpToParameters | null = null,
): BorderMergeSelectParameters {
    /**
     * Build parameters.
    
     * @param border the border number or name
     * @param up_to use an inclusive range of borders
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "select" as const,
        "border": border,
    };
    if (up_to !== null) {
        params["up_to"] = up_to;
    }
    return params;
}


function border_merge_select_cargs(
    params: BorderMergeSelectParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-select");
    cargs.push((params["border"] ?? null));
    if ((params["up_to"] ?? null) !== null) {
        cargs.push(...dynCargs((params["up_to"] ?? null).__STYXTYPE__)((params["up_to"] ?? null), execution));
    }
    return cargs;
}


function border_merge_border_params(
    border_file_in: InputPathType,
    select: Array<BorderMergeSelectParameters> | null = null,
): BorderMergeBorderParameters {
    /**
     * Build parameters.
    
     * @param border_file_in a border file to use borders from
     * @param select select a single border to use
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "border" as const,
        "border_file_in": border_file_in,
    };
    if (select !== null) {
        params["select"] = select;
    }
    return params;
}


function border_merge_border_cargs(
    params: BorderMergeBorderParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-border");
    cargs.push(execution.inputFile((params["border_file_in"] ?? null)));
    if ((params["select"] ?? null) !== null) {
        cargs.push(...(params["select"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


/**
 * Output object returned when calling `border_merge(...)`.
 *
 * @interface
 */
interface BorderMergeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output border file
     */
    border_file_out: OutputPathType;
}


function border_merge_params(
    border_file_out: string,
    border: Array<BorderMergeBorderParameters> | null = null,
): BorderMergeParameters {
    /**
     * Build parameters.
    
     * @param border_file_out the output border file
     * @param border specify an input border file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "border-merge" as const,
        "border_file_out": border_file_out,
    };
    if (border !== null) {
        params["border"] = border;
    }
    return params;
}


function border_merge_cargs(
    params: BorderMergeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-border-merge");
    cargs.push((params["border_file_out"] ?? null));
    if ((params["border"] ?? null) !== null) {
        cargs.push(...(params["border"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function border_merge_outputs(
    params: BorderMergeParameters,
    execution: Execution,
): BorderMergeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: BorderMergeOutputs = {
        root: execution.outputFile("."),
        border_file_out: execution.outputFile([(params["border_file_out"] ?? null)].join('')),
    };
    return ret;
}


function border_merge_execute(
    params: BorderMergeParameters,
    execution: Execution,
): BorderMergeOutputs {
    /**
     * Merge border files into a new file.
     * 
     * Takes one or more border files and makes a new border file from the borders in them.
     * 
     * Example: wb_command -border-merge out.border -border first.border -select 1 -border second.border
     * 
     * This example would take the first border from first.border, followed by all borders from second.border, and write these to out.border.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `BorderMergeOutputs`).
     */
    params = execution.params(params)
    const cargs = border_merge_cargs(params, execution)
    const ret = border_merge_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function border_merge(
    border_file_out: string,
    border: Array<BorderMergeBorderParameters> | null = null,
    runner: Runner | null = null,
): BorderMergeOutputs {
    /**
     * Merge border files into a new file.
     * 
     * Takes one or more border files and makes a new border file from the borders in them.
     * 
     * Example: wb_command -border-merge out.border -border first.border -select 1 -border second.border
     * 
     * This example would take the first border from first.border, followed by all borders from second.border, and write these to out.border.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param border_file_out the output border file
     * @param border specify an input border file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `BorderMergeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(BORDER_MERGE_METADATA);
    const params = border_merge_params(border_file_out, border)
    return border_merge_execute(params, execution);
}


export {
      BORDER_MERGE_METADATA,
      BorderMergeBorderParameters,
      BorderMergeOutputs,
      BorderMergeParameters,
      BorderMergeSelectParameters,
      BorderMergeUpToParameters,
      border_merge,
      border_merge_border_params,
      border_merge_params,
      border_merge_select_params,
      border_merge_up_to_params,
};
