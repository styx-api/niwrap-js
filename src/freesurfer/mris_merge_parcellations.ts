// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_MERGE_PARCELLATIONS_METADATA: Metadata = {
    id: "59eb13227975afaa7a05e9947ae25c61de64b8ec.boutiques",
    name: "mris_merge_parcellations",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisMergeParcellationsParameters {
    "__STYXTYPE__": "mris_merge_parcellations";
    "surface": InputPathType;
    "label1": InputPathType;
    "label2": InputPathType;
    "annot_name"?: string | null | undefined;
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
        "mris_merge_parcellations": mris_merge_parcellations_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_merge_parcellations(...)`.
 *
 * @interface
 */
interface MrisMergeParcellationsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mris_merge_parcellations_params(
    surface: InputPathType,
    label1: InputPathType,
    label2: InputPathType,
    annot_name: string | null = null,
): MrisMergeParcellationsParameters {
    /**
     * Build parameters.
    
     * @param surface Surface file to analyze
     * @param label1 First label file
     * @param label2 Second label file
     * @param annot_name Compute pairwise Hausdorff distance between all annotations
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_merge_parcellations" as const,
        "surface": surface,
        "label1": label1,
        "label2": label2,
    };
    if (annot_name !== null) {
        params["annot_name"] = annot_name;
    }
    return params;
}


function mris_merge_parcellations_cargs(
    params: MrisMergeParcellationsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_merge_parcellations");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    cargs.push(execution.inputFile((params["label1"] ?? null)));
    cargs.push(execution.inputFile((params["label2"] ?? null)));
    if ((params["annot_name"] ?? null) !== null) {
        cargs.push(
            "-a",
            (params["annot_name"] ?? null)
        );
    }
    return cargs;
}


function mris_merge_parcellations_outputs(
    params: MrisMergeParcellationsParameters,
    execution: Execution,
): MrisMergeParcellationsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisMergeParcellationsOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mris_merge_parcellations_execute(
    params: MrisMergeParcellationsParameters,
    execution: Execution,
): MrisMergeParcellationsOutputs {
    /**
     * This program computes the Hausdorff distance between two labels on the surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisMergeParcellationsOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_merge_parcellations_cargs(params, execution)
    const ret = mris_merge_parcellations_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_merge_parcellations(
    surface: InputPathType,
    label1: InputPathType,
    label2: InputPathType,
    annot_name: string | null = null,
    runner: Runner | null = null,
): MrisMergeParcellationsOutputs {
    /**
     * This program computes the Hausdorff distance between two labels on the surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param surface Surface file to analyze
     * @param label1 First label file
     * @param label2 Second label file
     * @param annot_name Compute pairwise Hausdorff distance between all annotations
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisMergeParcellationsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_MERGE_PARCELLATIONS_METADATA);
    const params = mris_merge_parcellations_params(surface, label1, label2, annot_name)
    return mris_merge_parcellations_execute(params, execution);
}


export {
      MRIS_MERGE_PARCELLATIONS_METADATA,
      MrisMergeParcellationsOutputs,
      MrisMergeParcellationsParameters,
      mris_merge_parcellations,
      mris_merge_parcellations_params,
};
