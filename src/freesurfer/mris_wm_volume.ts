// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_WM_VOLUME_METADATA: Metadata = {
    id: "587eff884475c51ca4db98e3c82ac79329b0686d.boutiques",
    name: "mris_wm_volume",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisWmVolumeParameters {
    "__STYXTYPE__": "mris_wm_volume";
    "subject": string;
    "hemi": string;
    "subjects_dir"?: string | null | undefined;
    "whitesurfname"?: string | null | undefined;
    "asegname"?: string | null | undefined;
    "verbose": boolean;
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
        "mris_wm_volume": mris_wm_volume_cargs,
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
 * Output object returned when calling `mris_wm_volume(...)`.
 *
 * @interface
 */
interface MrisWmVolumeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mris_wm_volume_params(
    subject: string,
    hemi: string,
    subjects_dir: string | null = null,
    whitesurfname: string | null = null,
    asegname: string | null = null,
    verbose: boolean = false,
): MrisWmVolumeParameters {
    /**
     * Build parameters.
    
     * @param subject Subject identifier
     * @param hemi Hemisphere to compute volume for (e.g., lh or rh)
     * @param subjects_dir The SUBJECTS_DIR where the subject data is stored
     * @param whitesurfname Name of the white surface file
     * @param asegname Name of the aseg file
     * @param verbose Output more messages
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_wm_volume" as const,
        "subject": subject,
        "hemi": hemi,
        "verbose": verbose,
    };
    if (subjects_dir !== null) {
        params["subjects_dir"] = subjects_dir;
    }
    if (whitesurfname !== null) {
        params["whitesurfname"] = whitesurfname;
    }
    if (asegname !== null) {
        params["asegname"] = asegname;
    }
    return params;
}


function mris_wm_volume_cargs(
    params: MrisWmVolumeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_wm_volume");
    cargs.push((params["subject"] ?? null));
    cargs.push((params["hemi"] ?? null));
    if ((params["subjects_dir"] ?? null) !== null) {
        cargs.push(
            "-SDIR",
            (params["subjects_dir"] ?? null)
        );
    }
    if ((params["whitesurfname"] ?? null) !== null) {
        cargs.push(
            "-white",
            (params["whitesurfname"] ?? null)
        );
    }
    if ((params["asegname"] ?? null) !== null) {
        cargs.push(
            "-aseg",
            (params["asegname"] ?? null)
        );
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("-v");
    }
    return cargs;
}


function mris_wm_volume_outputs(
    params: MrisWmVolumeParameters,
    execution: Execution,
): MrisWmVolumeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisWmVolumeOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mris_wm_volume_execute(
    params: MrisWmVolumeParameters,
    execution: Execution,
): MrisWmVolumeOutputs {
    /**
     * Computes the volume of the enclosed hemisphere white matter surface, ignoring non-white matter voxels in the aseg.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisWmVolumeOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_wm_volume_cargs(params, execution)
    const ret = mris_wm_volume_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_wm_volume(
    subject: string,
    hemi: string,
    subjects_dir: string | null = null,
    whitesurfname: string | null = null,
    asegname: string | null = null,
    verbose: boolean = false,
    runner: Runner | null = null,
): MrisWmVolumeOutputs {
    /**
     * Computes the volume of the enclosed hemisphere white matter surface, ignoring non-white matter voxels in the aseg.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject Subject identifier
     * @param hemi Hemisphere to compute volume for (e.g., lh or rh)
     * @param subjects_dir The SUBJECTS_DIR where the subject data is stored
     * @param whitesurfname Name of the white surface file
     * @param asegname Name of the aseg file
     * @param verbose Output more messages
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisWmVolumeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_WM_VOLUME_METADATA);
    const params = mris_wm_volume_params(subject, hemi, subjects_dir, whitesurfname, asegname, verbose)
    return mris_wm_volume_execute(params, execution);
}


export {
      MRIS_WM_VOLUME_METADATA,
      MrisWmVolumeOutputs,
      MrisWmVolumeParameters,
      mris_wm_volume,
      mris_wm_volume_params,
};
