// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FAT_PROC_CONVERT_DCM_ANAT_METADATA: Metadata = {
    id: "b710eae3e3dfce23951c6f5d44bae1dc65d2b536.boutiques",
    name: "fat_proc_convert_dcm_anat",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface FatProcConvertDcmAnatParameters {
    "__STYXTYPE__": "fat_proc_convert_dcm_anat";
    "nifti_input"?: InputPathType | null | undefined;
    "prefix": string;
    "workdir"?: string | null | undefined;
    "orient"?: string | null | undefined;
    "no_clean": boolean;
    "reorig_reorient_off": boolean;
    "qc_prefix"?: string | null | undefined;
    "no_cmd_out": boolean;
    "no_qc_view": boolean;
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
        "fat_proc_convert_dcm_anat": fat_proc_convert_dcm_anat_cargs,
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
        "fat_proc_convert_dcm_anat": fat_proc_convert_dcm_anat_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fat_proc_convert_dcm_anat(...)`.
 *
 * @interface
 */
interface FatProcConvertDcmAnatOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Converted anatomical volume output.
     */
    output_volume: OutputPathType;
}


function fat_proc_convert_dcm_anat_params(
    prefix: string,
    nifti_input: InputPathType | null = null,
    workdir: string | null = null,
    orient: string | null = null,
    no_clean: boolean = false,
    reorig_reorient_off: boolean = false,
    qc_prefix: string | null = null,
    no_cmd_out: boolean = false,
    no_qc_view: boolean = false,
): FatProcConvertDcmAnatParameters {
    /**
     * Build parameters.
    
     * @param prefix Set prefix (and path) for output data.
     * @param nifti_input Input as NIFTI file (zipped or unzipped fine). Alternative to '-indir ..'.
     * @param workdir Specify a working directory, which can be removed (default name = '__WORKING_convert_dcm_anat').
     * @param orient Optional chance to reset orientation of the volume files (default is currently 'RAI').
     * @param no_clean Prevents removal of working directory.
     * @param reorig_reorient_off Turns off the nicety of putting (0, 0, 0) at brain's center of mass (-> 'reorigin' calc) and reorienting data (-> 'reorient' calc).
     * @param qc_prefix Set the prefix of the QC image files separately (default is '').
     * @param no_cmd_out Don't save the command line call and the location where it was run.
     * @param no_qc_view Turn off generating QC image files.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fat_proc_convert_dcm_anat" as const,
        "prefix": prefix,
        "no_clean": no_clean,
        "reorig_reorient_off": reorig_reorient_off,
        "no_cmd_out": no_cmd_out,
        "no_qc_view": no_qc_view,
    };
    if (nifti_input !== null) {
        params["nifti_input"] = nifti_input;
    }
    if (workdir !== null) {
        params["workdir"] = workdir;
    }
    if (orient !== null) {
        params["orient"] = orient;
    }
    if (qc_prefix !== null) {
        params["qc_prefix"] = qc_prefix;
    }
    return params;
}


function fat_proc_convert_dcm_anat_cargs(
    params: FatProcConvertDcmAnatParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fat_proc_convert_dcm_anat");
    if ((params["nifti_input"] ?? null) !== null) {
        cargs.push(
            "-innii",
            execution.inputFile((params["nifti_input"] ?? null))
        );
    }
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    if ((params["workdir"] ?? null) !== null) {
        cargs.push(
            "-workdir",
            (params["workdir"] ?? null)
        );
    }
    if ((params["orient"] ?? null) !== null) {
        cargs.push(
            "-orient",
            (params["orient"] ?? null)
        );
    }
    if ((params["no_clean"] ?? null)) {
        cargs.push("-no_clean");
    }
    if ((params["reorig_reorient_off"] ?? null)) {
        cargs.push("-reorig_reorient_off");
    }
    if ((params["qc_prefix"] ?? null) !== null) {
        cargs.push(
            "-qc_prefix",
            (params["qc_prefix"] ?? null)
        );
    }
    if ((params["no_cmd_out"] ?? null)) {
        cargs.push("-no_cmd_out");
    }
    if ((params["no_qc_view"] ?? null)) {
        cargs.push("-no_qc_view");
    }
    return cargs;
}


function fat_proc_convert_dcm_anat_outputs(
    params: FatProcConvertDcmAnatParameters,
    execution: Execution,
): FatProcConvertDcmAnatOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FatProcConvertDcmAnatOutputs = {
        root: execution.outputFile("."),
        output_volume: execution.outputFile([(params["prefix"] ?? null), ".nii.gz"].join('')),
    };
    return ret;
}


function fat_proc_convert_dcm_anat_execute(
    params: FatProcConvertDcmAnatParameters,
    execution: Execution,
): FatProcConvertDcmAnatOutputs {
    /**
     * Converts an anatomical dataset from DICOM files into a volume, specifically designed to fit in line with other processing such as DTI analysis.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FatProcConvertDcmAnatOutputs`).
     */
    params = execution.params(params)
    const cargs = fat_proc_convert_dcm_anat_cargs(params, execution)
    const ret = fat_proc_convert_dcm_anat_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fat_proc_convert_dcm_anat(
    prefix: string,
    nifti_input: InputPathType | null = null,
    workdir: string | null = null,
    orient: string | null = null,
    no_clean: boolean = false,
    reorig_reorient_off: boolean = false,
    qc_prefix: string | null = null,
    no_cmd_out: boolean = false,
    no_qc_view: boolean = false,
    runner: Runner | null = null,
): FatProcConvertDcmAnatOutputs {
    /**
     * Converts an anatomical dataset from DICOM files into a volume, specifically designed to fit in line with other processing such as DTI analysis.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param prefix Set prefix (and path) for output data.
     * @param nifti_input Input as NIFTI file (zipped or unzipped fine). Alternative to '-indir ..'.
     * @param workdir Specify a working directory, which can be removed (default name = '__WORKING_convert_dcm_anat').
     * @param orient Optional chance to reset orientation of the volume files (default is currently 'RAI').
     * @param no_clean Prevents removal of working directory.
     * @param reorig_reorient_off Turns off the nicety of putting (0, 0, 0) at brain's center of mass (-> 'reorigin' calc) and reorienting data (-> 'reorient' calc).
     * @param qc_prefix Set the prefix of the QC image files separately (default is '').
     * @param no_cmd_out Don't save the command line call and the location where it was run.
     * @param no_qc_view Turn off generating QC image files.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FatProcConvertDcmAnatOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FAT_PROC_CONVERT_DCM_ANAT_METADATA);
    const params = fat_proc_convert_dcm_anat_params(prefix, nifti_input, workdir, orient, no_clean, reorig_reorient_off, qc_prefix, no_cmd_out, no_qc_view)
    return fat_proc_convert_dcm_anat_execute(params, execution);
}


export {
      FAT_PROC_CONVERT_DCM_ANAT_METADATA,
      FatProcConvertDcmAnatOutputs,
      FatProcConvertDcmAnatParameters,
      fat_proc_convert_dcm_anat,
      fat_proc_convert_dcm_anat_params,
};
