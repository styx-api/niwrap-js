// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__MEASURE_IN2OUT_METADATA: Metadata = {
    id: "12e4cb21b35db70d6b2ca1c1f10b19ffe465fb9d.boutiques",
    name: "@measure_in2out",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VMeasureIn2outParameters {
    "__STYXTYPE__": "@measure_in2out";
    "maskset": InputPathType;
    "surfset": InputPathType;
    "outdir": string;
    "resample"?: string | null | undefined;
    "increment"?: number | null | undefined;
    "surfsmooth"?: number | null | undefined;
    "maxthick"?: number | null | undefined;
    "depthsearch"?: number | null | undefined;
    "maskinoutvals"?: Array<number> | null | undefined;
    "keep_temp_files": boolean;
    "surfsmooth_method"?: string | null | undefined;
    "fs_cort_dir"?: string | null | undefined;
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
        "@measure_in2out": v__measure_in2out_cargs,
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
        "@measure_in2out": v__measure_in2out_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__measure_in2out(...)`.
 *
 * @interface
 */
interface VMeasureIn2outOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Volumetric thickness/distance from in to out
     */
    inout_dist: OutputPathType;
    /**
     * Volumetric distance to inside and outside in 2 volumes
     */
    in_and_out: OutputPathType;
    /**
     * Unsmoothed thickness mapped to surface nodes
     */
    inout_thick: OutputPathType;
    /**
     * Smoothed thickness mapped to surface nodes
     */
    inout_thick_smooth: OutputPathType;
    /**
     * Mask file
     */
    maskset_output: OutputPathType;
    /**
     * Resampled mask file
     */
    maskset_rs: OutputPathType;
    /**
     * Surface representation of mask volume
     */
    anat_gii: OutputPathType;
    /**
     * Simple specification file for surface to use with suma commands
     */
    quick_spec: OutputPathType;
}


function v__measure_in2out_params(
    maskset: InputPathType,
    surfset: InputPathType,
    outdir: string,
    resample: string | null = null,
    increment: number | null = null,
    surfsmooth: number | null = null,
    maxthick: number | null = null,
    depthsearch: number | null = null,
    maskinoutvals: Array<number> | null = null,
    keep_temp_files: boolean = false,
    surfsmooth_method: string | null = null,
    fs_cort_dir: string | null = null,
): VMeasureIn2outParameters {
    /**
     * Build parameters.
    
     * @param maskset Mask dataset for input.
     * @param surfset Surface dataset onto which to map thickness (probably a pial/gray matter surface).
     * @param outdir Output directory. If not specified, in2out_thickdir is used.
     * @param resample Resample input to mm in millimeters (put a number here). Set this to half a voxel or "auto". No resampling is done by default. Resampling is highly recommended for most 1mm data.
     * @param increment Test thickness at increments of sub-voxel distance. Default is 1/4 voxel minimum distance (in-plane).
     * @param surfsmooth Smooth surface map of thickness by mm millimeters. Default is 6 mm.
     * @param maxthick Search for maximum thickness value of mm millimeters. Default is 6 mm.
     * @param depthsearch Map to surface by looking for max along mm millimeter normal vectors. Default is 3 mm.
     * @param maskinoutvals Use v1 for value of mask, v2 and v3 for inside and outside mask values (e.g., '1 -2 -1').
     * @param keep_temp_files Do not delete the intermediate files (for testing).
     * @param surfsmooth_method Heat method used for smoothing surfaces. Default is HEAT_07 but HEAT_05 is also useful for some models.
     * @param fs_cort_dir Use FreeSurfer SUMA directory from @SUMA_Make_Spec_FS for processing.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@measure_in2out" as const,
        "maskset": maskset,
        "surfset": surfset,
        "outdir": outdir,
        "keep_temp_files": keep_temp_files,
    };
    if (resample !== null) {
        params["resample"] = resample;
    }
    if (increment !== null) {
        params["increment"] = increment;
    }
    if (surfsmooth !== null) {
        params["surfsmooth"] = surfsmooth;
    }
    if (maxthick !== null) {
        params["maxthick"] = maxthick;
    }
    if (depthsearch !== null) {
        params["depthsearch"] = depthsearch;
    }
    if (maskinoutvals !== null) {
        params["maskinoutvals"] = maskinoutvals;
    }
    if (surfsmooth_method !== null) {
        params["surfsmooth_method"] = surfsmooth_method;
    }
    if (fs_cort_dir !== null) {
        params["fs_cort_dir"] = fs_cort_dir;
    }
    return params;
}


function v__measure_in2out_cargs(
    params: VMeasureIn2outParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@measure_in2out");
    cargs.push(
        "-maskset",
        execution.inputFile((params["maskset"] ?? null))
    );
    cargs.push(
        "-surfset",
        execution.inputFile((params["surfset"] ?? null))
    );
    cargs.push(
        "-outdir",
        (params["outdir"] ?? null)
    );
    if ((params["resample"] ?? null) !== null) {
        cargs.push(
            "-resample",
            (params["resample"] ?? null)
        );
    }
    if ((params["increment"] ?? null) !== null) {
        cargs.push(
            "-increment",
            String((params["increment"] ?? null))
        );
    }
    if ((params["surfsmooth"] ?? null) !== null) {
        cargs.push(
            "-surfsmooth",
            String((params["surfsmooth"] ?? null))
        );
    }
    if ((params["maxthick"] ?? null) !== null) {
        cargs.push(
            "-maxthick",
            String((params["maxthick"] ?? null))
        );
    }
    if ((params["depthsearch"] ?? null) !== null) {
        cargs.push(
            "-depthsearch",
            String((params["depthsearch"] ?? null))
        );
    }
    if ((params["maskinoutvals"] ?? null) !== null) {
        cargs.push(
            "-maskinoutvals",
            ...(params["maskinoutvals"] ?? null).map(String)
        );
    }
    if ((params["keep_temp_files"] ?? null)) {
        cargs.push("-keep_temp_files");
    }
    if ((params["surfsmooth_method"] ?? null) !== null) {
        cargs.push(
            "-surfsmooth_method",
            (params["surfsmooth_method"] ?? null)
        );
    }
    if ((params["fs_cort_dir"] ?? null) !== null) {
        cargs.push(
            "-fs_cort_dir",
            (params["fs_cort_dir"] ?? null)
        );
    }
    return cargs;
}


function v__measure_in2out_outputs(
    params: VMeasureIn2outParameters,
    execution: Execution,
): VMeasureIn2outOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VMeasureIn2outOutputs = {
        root: execution.outputFile("."),
        inout_dist: execution.outputFile(["inout_dist.nii.gz"].join('')),
        in_and_out: execution.outputFile(["in_and_out.nii.gz"].join('')),
        inout_thick: execution.outputFile(["inout_thick.niml.dset"].join('')),
        inout_thick_smooth: execution.outputFile(["inout_thick_smooth.niml.dset"].join('')),
        maskset_output: execution.outputFile(["maskset.nii.gz"].join('')),
        maskset_rs: execution.outputFile(["maskset_rs.nii.gz"].join('')),
        anat_gii: execution.outputFile(["anat.gii"].join('')),
        quick_spec: execution.outputFile(["quick.spec"].join('')),
    };
    return ret;
}


function v__measure_in2out_execute(
    params: VMeasureIn2outParameters,
    execution: Execution,
): VMeasureIn2outOutputs {
    /**
     * Compute thickness of mask using in2out method.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VMeasureIn2outOutputs`).
     */
    params = execution.params(params)
    const cargs = v__measure_in2out_cargs(params, execution)
    const ret = v__measure_in2out_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__measure_in2out(
    maskset: InputPathType,
    surfset: InputPathType,
    outdir: string,
    resample: string | null = null,
    increment: number | null = null,
    surfsmooth: number | null = null,
    maxthick: number | null = null,
    depthsearch: number | null = null,
    maskinoutvals: Array<number> | null = null,
    keep_temp_files: boolean = false,
    surfsmooth_method: string | null = null,
    fs_cort_dir: string | null = null,
    runner: Runner | null = null,
): VMeasureIn2outOutputs {
    /**
     * Compute thickness of mask using in2out method.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param maskset Mask dataset for input.
     * @param surfset Surface dataset onto which to map thickness (probably a pial/gray matter surface).
     * @param outdir Output directory. If not specified, in2out_thickdir is used.
     * @param resample Resample input to mm in millimeters (put a number here). Set this to half a voxel or "auto". No resampling is done by default. Resampling is highly recommended for most 1mm data.
     * @param increment Test thickness at increments of sub-voxel distance. Default is 1/4 voxel minimum distance (in-plane).
     * @param surfsmooth Smooth surface map of thickness by mm millimeters. Default is 6 mm.
     * @param maxthick Search for maximum thickness value of mm millimeters. Default is 6 mm.
     * @param depthsearch Map to surface by looking for max along mm millimeter normal vectors. Default is 3 mm.
     * @param maskinoutvals Use v1 for value of mask, v2 and v3 for inside and outside mask values (e.g., '1 -2 -1').
     * @param keep_temp_files Do not delete the intermediate files (for testing).
     * @param surfsmooth_method Heat method used for smoothing surfaces. Default is HEAT_07 but HEAT_05 is also useful for some models.
     * @param fs_cort_dir Use FreeSurfer SUMA directory from @SUMA_Make_Spec_FS for processing.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VMeasureIn2outOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__MEASURE_IN2OUT_METADATA);
    const params = v__measure_in2out_params(maskset, surfset, outdir, resample, increment, surfsmooth, maxthick, depthsearch, maskinoutvals, keep_temp_files, surfsmooth_method, fs_cort_dir)
    return v__measure_in2out_execute(params, execution);
}


export {
      VMeasureIn2outOutputs,
      VMeasureIn2outParameters,
      V__MEASURE_IN2OUT_METADATA,
      v__measure_in2out,
      v__measure_in2out_params,
};
