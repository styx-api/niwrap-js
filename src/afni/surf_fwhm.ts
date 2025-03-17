// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SURF_FWHM_METADATA: Metadata = {
    id: "c0c295cfa2772a4d6c7970693902b2233ab45c11.boutiques",
    name: "SurfFWHM",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface SurfFwhmParameters {
    "__STYXTYPE__": "SurfFWHM";
    "input_file": InputPathType;
    "mask"?: InputPathType | null | undefined;
    "surf_1"?: string | null | undefined;
    "surf_sphere"?: string | null | undefined;
    "clean": boolean;
    "detrend"?: number | null | undefined;
    "detpoly"?: number | null | undefined;
    "detprefix"?: string | null | undefined;
    "prefix"?: string | null | undefined;
    "vox_size"?: number | null | undefined;
    "neighborhood"?: number | null | undefined;
    "ok_warn": boolean;
    "examples": boolean;
    "slice": boolean;
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
        "SurfFWHM": surf_fwhm_cargs,
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
        "SurfFWHM": surf_fwhm_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `surf_fwhm(...)`.
 *
 * @interface
 */
interface SurfFwhmOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Detrended dataset.
     */
    detrended_output: OutputPathType | null;
    /**
     * Main output dataset.
     */
    main_output: OutputPathType | null;
    /**
     * Histogram showing the distribution of local FWHM.
     */
    histogram_output: OutputPathType | null;
    /**
     * Mask output dataset.
     */
    mask_output: OutputPathType | null;
}


function surf_fwhm_params(
    input_file: InputPathType,
    mask: InputPathType | null = null,
    surf_1: string | null = null,
    surf_sphere: string | null = null,
    clean: boolean = false,
    detrend: number | null = null,
    detpoly: number | null = null,
    detprefix: string | null = null,
    prefix: string | null = null,
    vox_size: number | null = null,
    neighborhood: number | null = null,
    ok_warn: boolean = false,
    examples: boolean = false,
    slice: boolean = false,
): SurfFwhmParameters {
    /**
     * Build parameters.
    
     * @param input_file Dataset for which the FWHM is to be calculated.
     * @param mask Node mask so that only nodes in the mask are used to obtain estimates.
     * @param surf_1 Option for specifying the surface over which the input dataset is defined.
     * @param surf_sphere Spherical version of -SURF_1 for Local FWHM estimates.
     * @param clean Strip text from output to simplify parsing.
     * @param detrend Detrend to order 'q'. If q is not given, the program picks q=NT/30.
     * @param detpoly Detrend with polynomials of order p.
     * @param detprefix Save the detrended file into a dataset with prefix 'd'.
     * @param prefix Prefix of output data set.
     * @param vox_size Specify the nominal voxel size in mm.
     * @param neighborhood Neighborhood radius R for local FWHM estimates.
     * @param ok_warn Flag to set the mode to ok_warn.
     * @param examples Show command line examples and quit.
     * @param slice Use the contours from planar intersections to estimate gradients. For testing and development purposes only.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "SurfFWHM" as const,
        "input_file": input_file,
        "clean": clean,
        "ok_warn": ok_warn,
        "examples": examples,
        "slice": slice,
    };
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (surf_1 !== null) {
        params["surf_1"] = surf_1;
    }
    if (surf_sphere !== null) {
        params["surf_sphere"] = surf_sphere;
    }
    if (detrend !== null) {
        params["detrend"] = detrend;
    }
    if (detpoly !== null) {
        params["detpoly"] = detpoly;
    }
    if (detprefix !== null) {
        params["detprefix"] = detprefix;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (vox_size !== null) {
        params["vox_size"] = vox_size;
    }
    if (neighborhood !== null) {
        params["neighborhood"] = neighborhood;
    }
    return params;
}


function surf_fwhm_cargs(
    params: SurfFwhmParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("SurfFWHM");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-MASK",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["surf_1"] ?? null) !== null) {
        cargs.push(
            "-SURF_1",
            (params["surf_1"] ?? null)
        );
    }
    if ((params["surf_sphere"] ?? null) !== null) {
        cargs.push(
            "-SURF_SPHERE",
            (params["surf_sphere"] ?? null)
        );
    }
    if ((params["clean"] ?? null)) {
        cargs.push("-clean");
    }
    if ((params["detrend"] ?? null) !== null) {
        cargs.push(
            "-detrend",
            String((params["detrend"] ?? null))
        );
    }
    if ((params["detpoly"] ?? null) !== null) {
        cargs.push(
            "-detpoly",
            String((params["detpoly"] ?? null))
        );
    }
    if ((params["detprefix"] ?? null) !== null) {
        cargs.push(
            "-detprefix",
            (params["detprefix"] ?? null)
        );
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["vox_size"] ?? null) !== null) {
        cargs.push(
            "-vox_size",
            String((params["vox_size"] ?? null))
        );
    }
    if ((params["neighborhood"] ?? null) !== null) {
        cargs.push(
            "-hood",
            String((params["neighborhood"] ?? null))
        );
    }
    if ((params["ok_warn"] ?? null)) {
        cargs.push("-ok_warn");
    }
    if ((params["examples"] ?? null)) {
        cargs.push("-examples");
    }
    if ((params["slice"] ?? null)) {
        cargs.push("-slice");
    }
    return cargs;
}


function surf_fwhm_outputs(
    params: SurfFwhmParameters,
    execution: Execution,
): SurfFwhmOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SurfFwhmOutputs = {
        root: execution.outputFile("."),
        detrended_output: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), ".1D.dset"].join('')) : null,
        main_output: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), ".nii.gz"].join('')) : null,
        histogram_output: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "_histog.1D"].join('')) : null,
        mask_output: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "_mask.nii.gz"].join('')) : null,
    };
    return ret;
}


function surf_fwhm_execute(
    params: SurfFwhmParameters,
    execution: Execution,
): SurfFwhmOutputs {
    /**
     * A program for calculating local and global FWHM.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SurfFwhmOutputs`).
     */
    params = execution.params(params)
    const cargs = surf_fwhm_cargs(params, execution)
    const ret = surf_fwhm_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function surf_fwhm(
    input_file: InputPathType,
    mask: InputPathType | null = null,
    surf_1: string | null = null,
    surf_sphere: string | null = null,
    clean: boolean = false,
    detrend: number | null = null,
    detpoly: number | null = null,
    detprefix: string | null = null,
    prefix: string | null = null,
    vox_size: number | null = null,
    neighborhood: number | null = null,
    ok_warn: boolean = false,
    examples: boolean = false,
    slice: boolean = false,
    runner: Runner | null = null,
): SurfFwhmOutputs {
    /**
     * A program for calculating local and global FWHM.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_file Dataset for which the FWHM is to be calculated.
     * @param mask Node mask so that only nodes in the mask are used to obtain estimates.
     * @param surf_1 Option for specifying the surface over which the input dataset is defined.
     * @param surf_sphere Spherical version of -SURF_1 for Local FWHM estimates.
     * @param clean Strip text from output to simplify parsing.
     * @param detrend Detrend to order 'q'. If q is not given, the program picks q=NT/30.
     * @param detpoly Detrend with polynomials of order p.
     * @param detprefix Save the detrended file into a dataset with prefix 'd'.
     * @param prefix Prefix of output data set.
     * @param vox_size Specify the nominal voxel size in mm.
     * @param neighborhood Neighborhood radius R for local FWHM estimates.
     * @param ok_warn Flag to set the mode to ok_warn.
     * @param examples Show command line examples and quit.
     * @param slice Use the contours from planar intersections to estimate gradients. For testing and development purposes only.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SurfFwhmOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SURF_FWHM_METADATA);
    const params = surf_fwhm_params(input_file, mask, surf_1, surf_sphere, clean, detrend, detpoly, detprefix, prefix, vox_size, neighborhood, ok_warn, examples, slice)
    return surf_fwhm_execute(params, execution);
}


export {
      SURF_FWHM_METADATA,
      SurfFwhmOutputs,
      SurfFwhmParameters,
      surf_fwhm,
      surf_fwhm_params,
};
