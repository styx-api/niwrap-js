// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_GCAB_TRAIN_METADATA: Metadata = {
    id: "25854951f0e7de8635b58728b8a09edd107a327e.boutiques",
    name: "mri_gcab_train",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriGcabTrainParameters {
    "__STYXTYPE__": "mri_gcab_train";
    "removed_info"?: string | null | undefined;
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
        "mri_gcab_train": mri_gcab_train_cargs,
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
 * Output object returned when calling `mri_gcab_train(...)`.
 *
 * @interface
 */
interface MriGcabTrainOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mri_gcab_train_params(
    removed_info: string | null = "mri_gcab_train has been removed from this version of freesurfer.",
): MriGcabTrainParameters {
    /**
     * Build parameters.
    
     * @param removed_info Command has been removed from the current version of FreeSurfer. For further information, please contact the support mailing list.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_gcab_train" as const,
    };
    if (removed_info !== null) {
        params["removed_info"] = removed_info;
    }
    return params;
}


function mri_gcab_train_cargs(
    params: MriGcabTrainParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_gcab_train");
    if ((params["removed_info"] ?? null) !== null) {
        cargs.push((params["removed_info"] ?? null));
    }
    return cargs;
}


function mri_gcab_train_outputs(
    params: MriGcabTrainParameters,
    execution: Execution,
): MriGcabTrainOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriGcabTrainOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mri_gcab_train_execute(
    params: MriGcabTrainParameters,
    execution: Execution,
): MriGcabTrainOutputs {
    /**
     * Previously used command in FreeSurfer for training with Gaussian Classifier Atlas-based (GCAB) modeling; has been removed in the current version.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriGcabTrainOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_gcab_train_cargs(params, execution)
    const ret = mri_gcab_train_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_gcab_train(
    removed_info: string | null = "mri_gcab_train has been removed from this version of freesurfer.",
    runner: Runner | null = null,
): MriGcabTrainOutputs {
    /**
     * Previously used command in FreeSurfer for training with Gaussian Classifier Atlas-based (GCAB) modeling; has been removed in the current version.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param removed_info Command has been removed from the current version of FreeSurfer. For further information, please contact the support mailing list.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriGcabTrainOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_GCAB_TRAIN_METADATA);
    const params = mri_gcab_train_params(removed_info)
    return mri_gcab_train_execute(params, execution);
}


export {
      MRI_GCAB_TRAIN_METADATA,
      MriGcabTrainOutputs,
      MriGcabTrainParameters,
      mri_gcab_train,
      mri_gcab_train_params,
};
