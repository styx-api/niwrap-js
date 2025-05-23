// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CIFTI_MERGE_DENSE_METADATA: Metadata = {
    id: "360f66bd1b731911797e7d189929223ae85b152f.boutiques",
    name: "cifti-merge-dense",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface CiftiMergeDenseCiftiParameters {
    "__STYXTYPE__": "cifti";
    "cifti_in": InputPathType;
}


interface CiftiMergeDenseParameters {
    "__STYXTYPE__": "cifti-merge-dense";
    "direction": string;
    "cifti_out": string;
    "opt_label_collision_action"?: string | null | undefined;
    "cifti"?: Array<CiftiMergeDenseCiftiParameters> | null | undefined;
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
        "cifti-merge-dense": cifti_merge_dense_cargs,
        "cifti": cifti_merge_dense_cifti_cargs,
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
        "cifti-merge-dense": cifti_merge_dense_outputs,
    };
    return outputsFuncs[t];
}


function cifti_merge_dense_cifti_params(
    cifti_in: InputPathType,
): CiftiMergeDenseCiftiParameters {
    /**
     * Build parameters.
    
     * @param cifti_in a cifti file to merge
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti" as const,
        "cifti_in": cifti_in,
    };
    return params;
}


function cifti_merge_dense_cifti_cargs(
    params: CiftiMergeDenseCiftiParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-cifti");
    cargs.push(execution.inputFile((params["cifti_in"] ?? null)));
    return cargs;
}


/**
 * Output object returned when calling `cifti_merge_dense(...)`.
 *
 * @interface
 */
interface CiftiMergeDenseOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output cifti file
     */
    cifti_out: OutputPathType;
}


function cifti_merge_dense_params(
    direction: string,
    cifti_out: string,
    opt_label_collision_action: string | null = null,
    cifti: Array<CiftiMergeDenseCiftiParameters> | null = null,
): CiftiMergeDenseParameters {
    /**
     * Build parameters.
    
     * @param direction which dimension to merge along, ROW or COLUMN
     * @param cifti_out the output cifti file
     * @param opt_label_collision_action how to handle conflicts between label keys: 'ERROR', 'FIRST', or 'LEGACY', default 'ERROR', use 'LEGACY' to match v1.4.2 and earlier
     * @param cifti specify an input cifti file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti-merge-dense" as const,
        "direction": direction,
        "cifti_out": cifti_out,
    };
    if (opt_label_collision_action !== null) {
        params["opt_label_collision_action"] = opt_label_collision_action;
    }
    if (cifti !== null) {
        params["cifti"] = cifti;
    }
    return params;
}


function cifti_merge_dense_cargs(
    params: CiftiMergeDenseParameters,
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
    cargs.push("-cifti-merge-dense");
    cargs.push((params["direction"] ?? null));
    cargs.push((params["cifti_out"] ?? null));
    if ((params["opt_label_collision_action"] ?? null) !== null) {
        cargs.push(
            "-label-collision",
            (params["opt_label_collision_action"] ?? null)
        );
    }
    if ((params["cifti"] ?? null) !== null) {
        cargs.push(...(params["cifti"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function cifti_merge_dense_outputs(
    params: CiftiMergeDenseParameters,
    execution: Execution,
): CiftiMergeDenseOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CiftiMergeDenseOutputs = {
        root: execution.outputFile("."),
        cifti_out: execution.outputFile([(params["cifti_out"] ?? null)].join('')),
    };
    return ret;
}


function cifti_merge_dense_execute(
    params: CiftiMergeDenseParameters,
    execution: Execution,
): CiftiMergeDenseOutputs {
    /**
     * Merge cifti files along dense dimension.
     * 
     * The input cifti files must have matching mappings along the direction not specified, and the mapping along the specified direction must be brain models.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CiftiMergeDenseOutputs`).
     */
    params = execution.params(params)
    const cargs = cifti_merge_dense_cargs(params, execution)
    const ret = cifti_merge_dense_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cifti_merge_dense(
    direction: string,
    cifti_out: string,
    opt_label_collision_action: string | null = null,
    cifti: Array<CiftiMergeDenseCiftiParameters> | null = null,
    runner: Runner | null = null,
): CiftiMergeDenseOutputs {
    /**
     * Merge cifti files along dense dimension.
     * 
     * The input cifti files must have matching mappings along the direction not specified, and the mapping along the specified direction must be brain models.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param direction which dimension to merge along, ROW or COLUMN
     * @param cifti_out the output cifti file
     * @param opt_label_collision_action how to handle conflicts between label keys: 'ERROR', 'FIRST', or 'LEGACY', default 'ERROR', use 'LEGACY' to match v1.4.2 and earlier
     * @param cifti specify an input cifti file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CiftiMergeDenseOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CIFTI_MERGE_DENSE_METADATA);
    const params = cifti_merge_dense_params(direction, cifti_out, opt_label_collision_action, cifti)
    return cifti_merge_dense_execute(params, execution);
}


export {
      CIFTI_MERGE_DENSE_METADATA,
      CiftiMergeDenseCiftiParameters,
      CiftiMergeDenseOutputs,
      CiftiMergeDenseParameters,
      cifti_merge_dense,
      cifti_merge_dense_cifti_params,
      cifti_merge_dense_params,
};
