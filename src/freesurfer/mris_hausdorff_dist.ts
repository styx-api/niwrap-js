// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_HAUSDORFF_DIST_METADATA: Metadata = {
    id: "c8c6f8e737d084817096cd5c6491a8218fa2f1ee.boutiques",
    name: "mris_hausdorff_dist",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisHausdorffDistParameters {
    "__STYXTYPE__": "mris_hausdorff_dist";
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
        "mris_hausdorff_dist": mris_hausdorff_dist_cargs,
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
        "mris_hausdorff_dist": mris_hausdorff_dist_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_hausdorff_dist(...)`.
 *
 * @interface
 */
interface MrisHausdorffDistOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file containing the Hausdorff distance computation results
     */
    output_file: OutputPathType;
}


function mris_hausdorff_dist_params(
    surface: InputPathType,
    label1: InputPathType,
    label2: InputPathType,
    annot_name: string | null = null,
): MrisHausdorffDistParameters {
    /**
     * Build parameters.
    
     * @param surface Surface file on which the labels exist
     * @param label1 First label file
     * @param label2 Second label file
     * @param annot_name Compute pairwise Hausdorff Distance (HD) between all annotations with the given name
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_hausdorff_dist" as const,
        "surface": surface,
        "label1": label1,
        "label2": label2,
    };
    if (annot_name !== null) {
        params["annot_name"] = annot_name;
    }
    return params;
}


function mris_hausdorff_dist_cargs(
    params: MrisHausdorffDistParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_hausdorff_dist");
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


function mris_hausdorff_dist_outputs(
    params: MrisHausdorffDistParameters,
    execution: Execution,
): MrisHausdorffDistOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisHausdorffDistOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile(["hausdorff_output.txt"].join('')),
    };
    return ret;
}


function mris_hausdorff_dist_execute(
    params: MrisHausdorffDistParameters,
    execution: Execution,
): MrisHausdorffDistOutputs {
    /**
     * This program computes the Hausdorff distance between two labels on a surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisHausdorffDistOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_hausdorff_dist_cargs(params, execution)
    const ret = mris_hausdorff_dist_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_hausdorff_dist(
    surface: InputPathType,
    label1: InputPathType,
    label2: InputPathType,
    annot_name: string | null = null,
    runner: Runner | null = null,
): MrisHausdorffDistOutputs {
    /**
     * This program computes the Hausdorff distance between two labels on a surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param surface Surface file on which the labels exist
     * @param label1 First label file
     * @param label2 Second label file
     * @param annot_name Compute pairwise Hausdorff Distance (HD) between all annotations with the given name
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisHausdorffDistOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_HAUSDORFF_DIST_METADATA);
    const params = mris_hausdorff_dist_params(surface, label1, label2, annot_name)
    return mris_hausdorff_dist_execute(params, execution);
}


export {
      MRIS_HAUSDORFF_DIST_METADATA,
      MrisHausdorffDistOutputs,
      MrisHausdorffDistParameters,
      mris_hausdorff_dist,
      mris_hausdorff_dist_params,
};
