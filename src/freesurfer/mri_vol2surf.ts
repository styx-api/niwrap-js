// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_VOL2SURF_METADATA: Metadata = {
    id: "9b1f4f0a610312351db96a33b3de116be9ef57ae.boutiques",
    name: "mri_vol2surf",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriVol2surfParameters {
    "__STYXTYPE__": "mri_vol2surf";
    "input_volume": InputPathType;
    "registration_file": InputPathType;
    "output_path": string;
    "reference_volume"?: string | null | undefined;
    "regheader_subject"?: string | null | undefined;
    "mni152reg_flag": boolean;
    "target_subject"?: string | null | undefined;
    "hemisphere"?: "lh" | "rh" | null | undefined;
    "surface"?: string | null | undefined;
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
        "mri_vol2surf": mri_vol2surf_cargs,
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
        "mri_vol2surf": mri_vol2surf_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_vol2surf(...)`.
 *
 * @interface
 */
interface MriVol2surfOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file containing the resampled volume onto the surface
     */
    resampled_volume_output: OutputPathType;
}


function mri_vol2surf_params(
    input_volume: InputPathType,
    registration_file: InputPathType,
    output_path: string,
    reference_volume: string | null = null,
    regheader_subject: string | null = null,
    mni152reg_flag: boolean = false,
    target_subject: string | null = null,
    hemisphere: "lh" | "rh" | null = null,
    surface: string | null = null,
): MriVol2surfParameters {
    /**
     * Build parameters.
    
     * @param input_volume Path to input volume file
     * @param registration_file Registration file as computed by tkregister, spmregister, bbregister, etc.
     * @param output_path Output path for the resampled volume
     * @param reference_volume Reference volume name, default is orig.mgz
     * @param regheader_subject Compute registration from header information, aligning the current volume with the subject/mri/orig.mgz
     * @param mni152reg_flag Use MNI152 registration: $FREESURFER_HOME/average/mni152.register.dat
     * @param target_subject Target subject for resampling, can be a subject name or 'ico' for icosahedron
     * @param hemisphere Hemisphere to process: lh = left hemisphere or rh = right hemisphere
     * @param surface Target surface on which to resample, default is 'white'
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_vol2surf" as const,
        "input_volume": input_volume,
        "registration_file": registration_file,
        "output_path": output_path,
        "mni152reg_flag": mni152reg_flag,
    };
    if (reference_volume !== null) {
        params["reference_volume"] = reference_volume;
    }
    if (regheader_subject !== null) {
        params["regheader_subject"] = regheader_subject;
    }
    if (target_subject !== null) {
        params["target_subject"] = target_subject;
    }
    if (hemisphere !== null) {
        params["hemisphere"] = hemisphere;
    }
    if (surface !== null) {
        params["surface"] = surface;
    }
    return params;
}


function mri_vol2surf_cargs(
    params: MriVol2surfParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_vol2surf");
    cargs.push(
        "--mov",
        execution.inputFile((params["input_volume"] ?? null))
    );
    cargs.push(
        "--reg",
        execution.inputFile((params["registration_file"] ?? null))
    );
    cargs.push(
        "--o",
        (params["output_path"] ?? null)
    );
    if ((params["reference_volume"] ?? null) !== null) {
        cargs.push(
            "--ref",
            (params["reference_volume"] ?? null)
        );
    }
    if ((params["regheader_subject"] ?? null) !== null) {
        cargs.push(
            "--regheader",
            (params["regheader_subject"] ?? null)
        );
    }
    if ((params["mni152reg_flag"] ?? null)) {
        cargs.push("--mni152reg");
    }
    if ((params["target_subject"] ?? null) !== null) {
        cargs.push(
            "--trgsubject",
            (params["target_subject"] ?? null)
        );
    }
    if ((params["hemisphere"] ?? null) !== null) {
        cargs.push(
            "--hemi",
            (params["hemisphere"] ?? null)
        );
    }
    if ((params["surface"] ?? null) !== null) {
        cargs.push(
            "--surf",
            (params["surface"] ?? null)
        );
    }
    return cargs;
}


function mri_vol2surf_outputs(
    params: MriVol2surfParameters,
    execution: Execution,
): MriVol2surfOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriVol2surfOutputs = {
        root: execution.outputFile("."),
        resampled_volume_output: execution.outputFile([(params["output_path"] ?? null)].join('')),
    };
    return ret;
}


function mri_vol2surf_execute(
    params: MriVol2surfParameters,
    execution: Execution,
): MriVol2surfOutputs {
    /**
     * This program resamples a volume onto a surface of a subject or the sphere. The output can be viewed on the surface (using tksurfer) or can be used for surface-based intersubject averaging.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriVol2surfOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_vol2surf_cargs(params, execution)
    const ret = mri_vol2surf_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_vol2surf(
    input_volume: InputPathType,
    registration_file: InputPathType,
    output_path: string,
    reference_volume: string | null = null,
    regheader_subject: string | null = null,
    mni152reg_flag: boolean = false,
    target_subject: string | null = null,
    hemisphere: "lh" | "rh" | null = null,
    surface: string | null = null,
    runner: Runner | null = null,
): MriVol2surfOutputs {
    /**
     * This program resamples a volume onto a surface of a subject or the sphere. The output can be viewed on the surface (using tksurfer) or can be used for surface-based intersubject averaging.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_volume Path to input volume file
     * @param registration_file Registration file as computed by tkregister, spmregister, bbregister, etc.
     * @param output_path Output path for the resampled volume
     * @param reference_volume Reference volume name, default is orig.mgz
     * @param regheader_subject Compute registration from header information, aligning the current volume with the subject/mri/orig.mgz
     * @param mni152reg_flag Use MNI152 registration: $FREESURFER_HOME/average/mni152.register.dat
     * @param target_subject Target subject for resampling, can be a subject name or 'ico' for icosahedron
     * @param hemisphere Hemisphere to process: lh = left hemisphere or rh = right hemisphere
     * @param surface Target surface on which to resample, default is 'white'
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriVol2surfOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_VOL2SURF_METADATA);
    const params = mri_vol2surf_params(input_volume, registration_file, output_path, reference_volume, regheader_subject, mni152reg_flag, target_subject, hemisphere, surface)
    return mri_vol2surf_execute(params, execution);
}


export {
      MRI_VOL2SURF_METADATA,
      MriVol2surfOutputs,
      MriVol2surfParameters,
      mri_vol2surf,
      mri_vol2surf_params,
};
