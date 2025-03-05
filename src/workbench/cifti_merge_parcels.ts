// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CIFTI_MERGE_PARCELS_METADATA: Metadata = {
    id: "248d8b5bb78af2ce84baa7231e1eaa83a19fda9b.boutiques",
    name: "cifti-merge-parcels",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface CiftiMergeParcelsCiftiParameters {
    "__STYXTYPE__": "cifti";
    "cifti_in": InputPathType;
}


interface CiftiMergeParcelsParameters {
    "__STYXTYPE__": "cifti-merge-parcels";
    "direction": string;
    "cifti_out": string;
    "cifti"?: Array<CiftiMergeParcelsCiftiParameters> | null | undefined;
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
        "cifti-merge-parcels": cifti_merge_parcels_cargs,
        "cifti": cifti_merge_parcels_cifti_cargs,
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
        "cifti-merge-parcels": cifti_merge_parcels_outputs,
    };
    return outputsFuncs[t];
}


function cifti_merge_parcels_cifti_params(
    cifti_in: InputPathType,
): CiftiMergeParcelsCiftiParameters {
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


function cifti_merge_parcels_cifti_cargs(
    params: CiftiMergeParcelsCiftiParameters,
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
 * Output object returned when calling `cifti_merge_parcels(...)`.
 *
 * @interface
 */
interface CiftiMergeParcelsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output cifti file
     */
    cifti_out: OutputPathType;
}


function cifti_merge_parcels_params(
    direction: string,
    cifti_out: string,
    cifti: Array<CiftiMergeParcelsCiftiParameters> | null = null,
): CiftiMergeParcelsParameters {
    /**
     * Build parameters.
    
     * @param direction which dimension to merge along (integer, 'ROW', or 'COLUMN')
     * @param cifti_out the output cifti file
     * @param cifti specify an input cifti file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti-merge-parcels" as const,
        "direction": direction,
        "cifti_out": cifti_out,
    };
    if (cifti !== null) {
        params["cifti"] = cifti;
    }
    return params;
}


function cifti_merge_parcels_cargs(
    params: CiftiMergeParcelsParameters,
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
    cargs.push("-cifti-merge-parcels");
    cargs.push((params["direction"] ?? null));
    cargs.push((params["cifti_out"] ?? null));
    if ((params["cifti"] ?? null) !== null) {
        cargs.push(...(params["cifti"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function cifti_merge_parcels_outputs(
    params: CiftiMergeParcelsParameters,
    execution: Execution,
): CiftiMergeParcelsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CiftiMergeParcelsOutputs = {
        root: execution.outputFile("."),
        cifti_out: execution.outputFile([(params["cifti_out"] ?? null)].join('')),
    };
    return ret;
}


function cifti_merge_parcels_execute(
    params: CiftiMergeParcelsParameters,
    execution: Execution,
): CiftiMergeParcelsOutputs {
    /**
     * Merge cifti files along parcels dimension.
     * 
     * The input cifti files must have matching mappings along the direction not specified, and the mapping along the specified direction must be parcels.  The direction can be either an integer starting from 1, or the strings 'ROW' or 'COLUMN'.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CiftiMergeParcelsOutputs`).
     */
    params = execution.params(params)
    const cargs = cifti_merge_parcels_cargs(params, execution)
    const ret = cifti_merge_parcels_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cifti_merge_parcels(
    direction: string,
    cifti_out: string,
    cifti: Array<CiftiMergeParcelsCiftiParameters> | null = null,
    runner: Runner | null = null,
): CiftiMergeParcelsOutputs {
    /**
     * Merge cifti files along parcels dimension.
     * 
     * The input cifti files must have matching mappings along the direction not specified, and the mapping along the specified direction must be parcels.  The direction can be either an integer starting from 1, or the strings 'ROW' or 'COLUMN'.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param direction which dimension to merge along (integer, 'ROW', or 'COLUMN')
     * @param cifti_out the output cifti file
     * @param cifti specify an input cifti file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CiftiMergeParcelsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CIFTI_MERGE_PARCELS_METADATA);
    const params = cifti_merge_parcels_params(direction, cifti_out, cifti)
    return cifti_merge_parcels_execute(params, execution);
}


export {
      CIFTI_MERGE_PARCELS_METADATA,
      CiftiMergeParcelsCiftiParameters,
      CiftiMergeParcelsOutputs,
      CiftiMergeParcelsParameters,
      cifti_merge_parcels,
      cifti_merge_parcels_cifti_params,
      cifti_merge_parcels_params,
};
