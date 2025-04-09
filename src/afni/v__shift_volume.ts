// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__SHIFT_VOLUME_METADATA: Metadata = {
    id: "cc600997e0c495954f45b1b016157de5ebc451b5.boutiques",
    name: "@Shift_Volume",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VShiftVolumeParameters {
    "__STYXTYPE__": "@Shift_Volume";
    "rai_shift_vector"?: Array<number> | null | undefined;
    "mni_anat_to_mni": boolean;
    "mni_to_mni_anat": boolean;
    "dset": InputPathType;
    "no_cp": boolean;
    "prefix": string;
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
        "@Shift_Volume": v__shift_volume_cargs,
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
        "@Shift_Volume": v__shift_volume_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__shift_volume(...)`.
 *
 * @interface
 */
interface VShiftVolumeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Shifted output dataset.
     */
    output_file: OutputPathType;
}


function v__shift_volume_params(
    dset: InputPathType,
    prefix: string,
    rai_shift_vector: Array<number> | null = null,
    mni_anat_to_mni: boolean = false,
    mni_to_mni_anat: boolean = false,
    no_cp: boolean = false,
): VShiftVolumeParameters {
    /**
     * Build parameters.
    
     * @param dset Input dataset, typically an anatomical dataset to be aligned to BASE.
     * @param prefix Prefix for the output dataset.
     * @param rai_shift_vector Move dataset by dR, dA, dI mm (RAI coordinate system)
     * @param mni_anat_to_mni Move dataset from MNI Anatomical space to MNI space (equivalent to -rai_shift 0 -4 -5)
     * @param mni_to_mni_anat Move dataset from MNI space to MNI Anatomical space (equivalent to -rai_shift 0 4 5)
     * @param no_cp Do not create new data, shift the existing ones (use with caution).
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@Shift_Volume" as const,
        "mni_anat_to_mni": mni_anat_to_mni,
        "mni_to_mni_anat": mni_to_mni_anat,
        "dset": dset,
        "no_cp": no_cp,
        "prefix": prefix,
    };
    if (rai_shift_vector !== null) {
        params["rai_shift_vector"] = rai_shift_vector;
    }
    return params;
}


function v__shift_volume_cargs(
    params: VShiftVolumeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@Shift_Volume");
    if ((params["rai_shift_vector"] ?? null) !== null) {
        cargs.push(
            "-rai_shift",
            ...(params["rai_shift_vector"] ?? null).map(String)
        );
    }
    if ((params["mni_anat_to_mni"] ?? null)) {
        cargs.push("-MNI_Anat_to_MNI");
    }
    if ((params["mni_to_mni_anat"] ?? null)) {
        cargs.push("-MNI_to_MNI_Anat");
    }
    cargs.push(
        "-dset",
        execution.inputFile((params["dset"] ?? null))
    );
    if ((params["no_cp"] ?? null)) {
        cargs.push("-no_cp");
    }
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    return cargs;
}


function v__shift_volume_outputs(
    params: VShiftVolumeParameters,
    execution: Execution,
): VShiftVolumeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VShiftVolumeOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["prefix"] ?? null), ".nii.gz"].join('')),
    };
    return ret;
}


function v__shift_volume_execute(
    params: VShiftVolumeParameters,
    execution: Execution,
): VShiftVolumeOutputs {
    /**
     * Tool to shift a dataset in the RAI coordinate system or between MNI anatomical space and MNI space.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VShiftVolumeOutputs`).
     */
    params = execution.params(params)
    const cargs = v__shift_volume_cargs(params, execution)
    const ret = v__shift_volume_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__shift_volume(
    dset: InputPathType,
    prefix: string,
    rai_shift_vector: Array<number> | null = null,
    mni_anat_to_mni: boolean = false,
    mni_to_mni_anat: boolean = false,
    no_cp: boolean = false,
    runner: Runner | null = null,
): VShiftVolumeOutputs {
    /**
     * Tool to shift a dataset in the RAI coordinate system or between MNI anatomical space and MNI space.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dset Input dataset, typically an anatomical dataset to be aligned to BASE.
     * @param prefix Prefix for the output dataset.
     * @param rai_shift_vector Move dataset by dR, dA, dI mm (RAI coordinate system)
     * @param mni_anat_to_mni Move dataset from MNI Anatomical space to MNI space (equivalent to -rai_shift 0 -4 -5)
     * @param mni_to_mni_anat Move dataset from MNI space to MNI Anatomical space (equivalent to -rai_shift 0 4 5)
     * @param no_cp Do not create new data, shift the existing ones (use with caution).
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VShiftVolumeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__SHIFT_VOLUME_METADATA);
    const params = v__shift_volume_params(dset, prefix, rai_shift_vector, mni_anat_to_mni, mni_to_mni_anat, no_cp)
    return v__shift_volume_execute(params, execution);
}


export {
      VShiftVolumeOutputs,
      VShiftVolumeParameters,
      V__SHIFT_VOLUME_METADATA,
      v__shift_volume,
      v__shift_volume_params,
};
