// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__SUMA_RENUMBER_FS_METADATA: Metadata = {
    id: "c19b88d98568eb300b3deddf6a92cffe231ec7b8.boutiques",
    name: "@SUMA_renumber_FS",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VSumaRenumberFsParameters {
    "__STYXTYPE__": "@SUMA_renumber_FS";
    "sumadir": string;
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
        "@SUMA_renumber_FS": v__suma_renumber_fs_cargs,
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
        "@SUMA_renumber_FS": v__suma_renumber_fs_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__suma_renumber_fs(...)`.
 *
 * @interface
 */
interface VSumaRenumberFsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Whole parcellation/segmentation file with renumbered ROIs.
     */
    ren_all: OutputPathType;
    /**
     * Gray matter tissue segmentation map.
     */
    ren_gm: OutputPathType;
    /**
     * White matter tissue segmentation map.
     */
    ren_wmat: OutputPathType;
    /**
     * Cerebrospinal fluid tissue segmentation map.
     */
    ren_csf: OutputPathType;
    /**
     * Ventricles and choroid plexus tissue segmentation map.
     */
    ren_vent: OutputPathType;
    /**
     * Other tissue segmentation map (optic chiasm, non-WM-hypointens, etc.).
     */
    ren_othr: OutputPathType;
    /**
     * Unknown tissue segmentation map (FS-defined 'unknown', with voxel value >0).
     */
    ren_unkn: OutputPathType;
    /**
     * Gray matter ROIs without '*-Cerebral-Cortex' dots.
     */
    ren_gmrois: OutputPathType;
    /**
     * White matter mask (excluding the dotted part from FS).
     */
    fs_ap_wm: OutputPathType;
    /**
     * Lateral ventricles mask ('*-Lateral-Ventricle').
     */
    fs_ap_latvent: OutputPathType;
    /**
     * Labeltable of the new ROI values.
     */
    ren_lbl_table: OutputPathType;
}


function v__suma_renumber_fs_params(
    sumadir: string,
): VSumaRenumberFsParameters {
    /**
     * Build parameters.
    
     * @param sumadir Path to the 'SUMA/' directory created by @SUMA_Make_Spec_FS.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@SUMA_renumber_FS" as const,
        "sumadir": sumadir,
    };
    return params;
}


function v__suma_renumber_fs_cargs(
    params: VSumaRenumberFsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@SUMA_renumber_FS");
    cargs.push((params["sumadir"] ?? null));
    return cargs;
}


function v__suma_renumber_fs_outputs(
    params: VSumaRenumberFsParameters,
    execution: Execution,
): VSumaRenumberFsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VSumaRenumberFsOutputs = {
        root: execution.outputFile("."),
        ren_all: execution.outputFile(["*_REN_all.nii.gz"].join('')),
        ren_gm: execution.outputFile(["*_REN_gm.nii.gz"].join('')),
        ren_wmat: execution.outputFile(["*_REN_wmat.nii.gz"].join('')),
        ren_csf: execution.outputFile(["*_REN_csf.nii.gz"].join('')),
        ren_vent: execution.outputFile(["*_REN_vent.nii.gz"].join('')),
        ren_othr: execution.outputFile(["*_REN_othr.nii.gz"].join('')),
        ren_unkn: execution.outputFile(["*_REN_unkn.nii.gz"].join('')),
        ren_gmrois: execution.outputFile(["*_REN_gmrois.nii.gz"].join('')),
        fs_ap_wm: execution.outputFile(["fs_ap_wm.nii.gz"].join('')),
        fs_ap_latvent: execution.outputFile(["fs_ap_latvent.nii.gz"].join('')),
        ren_lbl_table: execution.outputFile(["*_REN_all.niml.lt"].join('')),
    };
    return ret;
}


function v__suma_renumber_fs_execute(
    params: VSumaRenumberFsParameters,
    execution: Execution,
): VSumaRenumberFsOutputs {
    /**
     * This script processes FreeSurfer-generated parcellation files and produces various derived datasets and segmentation maps.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VSumaRenumberFsOutputs`).
     */
    params = execution.params(params)
    const cargs = v__suma_renumber_fs_cargs(params, execution)
    const ret = v__suma_renumber_fs_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__suma_renumber_fs(
    sumadir: string,
    runner: Runner | null = null,
): VSumaRenumberFsOutputs {
    /**
     * This script processes FreeSurfer-generated parcellation files and produces various derived datasets and segmentation maps.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param sumadir Path to the 'SUMA/' directory created by @SUMA_Make_Spec_FS.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VSumaRenumberFsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__SUMA_RENUMBER_FS_METADATA);
    const params = v__suma_renumber_fs_params(sumadir)
    return v__suma_renumber_fs_execute(params, execution);
}


export {
      VSumaRenumberFsOutputs,
      VSumaRenumberFsParameters,
      V__SUMA_RENUMBER_FS_METADATA,
      v__suma_renumber_fs,
      v__suma_renumber_fs_params,
};
