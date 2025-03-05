// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TOPUP_METADATA: Metadata = {
    id: "0976e0b733869c1f8949a92a09c05ca0907bd2ef.boutiques",
    name: "topup",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface TopupParameters {
    "__STYXTYPE__": "topup";
    "imain": InputPathType;
    "datain": InputPathType;
    "out"?: string | null | undefined;
    "fout"?: string | null | undefined;
    "iout"?: string | null | undefined;
    "logout"?: string | null | undefined;
    "warpres"?: number | null | undefined;
    "subsamp"?: number | null | undefined;
    "fwhm"?: number | null | undefined;
    "config"?: InputPathType | null | undefined;
    "miter"?: number | null | undefined;
    "lambda"?: number | null | undefined;
    "ssqlambda": boolean;
    "regmod"?: "membrane_energy" | "bending_energy" | null | undefined;
    "estmov": boolean;
    "minmet"?: 0 | 1 | null | undefined;
    "splineorder"?: 2 | 3 | null | undefined;
    "numprec"?: "double" | "float" | null | undefined;
    "interp"?: "linear" | "spline" | null | undefined;
    "scale": boolean;
    "regrid": boolean;
    "nthr"?: number | null | undefined;
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
        "topup": topup_cargs,
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
        "topup": topup_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `topup(...)`.
 *
 * @interface
 */
interface TopupOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Spline coefficient field estimates (Hz)
     */
    fieldcoef: OutputPathType | null;
    /**
     * Movement parameters
     */
    movpar: OutputPathType | null;
    /**
     * Image file with field (Hz)
     */
    fout: OutputPathType | null;
    /**
     * 4D image file with unwarped images
     */
    iout: OutputPathType | null;
    /**
     * Log file
     */
    logout: OutputPathType | null;
}


function topup_params(
    imain: InputPathType,
    datain: InputPathType,
    out: string | null = null,
    fout: string | null = null,
    iout: string | null = null,
    logout: string | null = null,
    warpres: number | null = null,
    subsamp: number | null = null,
    fwhm: number | null = null,
    config: InputPathType | null = null,
    miter: number | null = null,
    lambda: number | null = null,
    ssqlambda: boolean = false,
    regmod: "membrane_energy" | "bending_energy" | null = null,
    estmov: boolean = false,
    minmet: 0 | 1 | null = null,
    splineorder: 2 | 3 | null = null,
    numprec: "double" | "float" | null = null,
    interp: "linear" | "spline" | null = null,
    scale: boolean = false,
    regrid: boolean = false,
    nthr: number | null = null,
    verbose: boolean = false,
): TopupParameters {
    /**
     * Build parameters.
    
     * @param imain Name of 4D file with images
     * @param datain Name of text file with PE directions/times
     * @param out Base-name of output files (spline coefficients (Hz) and movement parameters)
     * @param fout Name of image file with field (Hz)
     * @param iout Name of 4D image file with unwarped images
     * @param logout Name of log-file
     * @param warpres (Approximate) resolution (in mm) of warp basis for the different sub-sampling levels, default 10
     * @param subsamp Sub-sampling scheme, default 1
     * @param fwhm FWHM (in mm) of gaussian smoothing kernel, default 8
     * @param config Name of config file specifying command line arguments
     * @param miter Max # of non-linear iterations, default 5
     * @param lambda Weight of regularisation, default depending on --ssqlambda and --regmod switches. See user documentation.
     * @param ssqlambda If set (=1), lambda is weighted by current ssq, default 1
     * @param regmod Model for regularisation of warp-field [membrane_energy bending_energy], default bending_energy
     * @param estmov Estimate movements if set, default 1 (true)
     * @param minmet Minimisation method 0=Levenberg-Marquardt, 1=Scaled Conjugate Gradient, default 0 (LM)
     * @param splineorder Order of spline, 2=Quadratic spline, 3=Cubic spline. Default=3
     * @param numprec Precision for representing Hessian, double or float. Default double
     * @param interp Image interpolation model, linear or spline. Default spline
     * @param scale If set (=1), the images are individually scaled to a common mean, default 0 (false)
     * @param regrid If set (=1), the calculations are done in a different grid, default 1 (true)
     * @param nthr Number of threads to use (cannot be greater than numbers of hardware cores), default 1
     * @param verbose Print diagnostic information while running
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "topup" as const,
        "imain": imain,
        "datain": datain,
        "ssqlambda": ssqlambda,
        "estmov": estmov,
        "scale": scale,
        "regrid": regrid,
        "verbose": verbose,
    };
    if (out !== null) {
        params["out"] = out;
    }
    if (fout !== null) {
        params["fout"] = fout;
    }
    if (iout !== null) {
        params["iout"] = iout;
    }
    if (logout !== null) {
        params["logout"] = logout;
    }
    if (warpres !== null) {
        params["warpres"] = warpres;
    }
    if (subsamp !== null) {
        params["subsamp"] = subsamp;
    }
    if (fwhm !== null) {
        params["fwhm"] = fwhm;
    }
    if (config !== null) {
        params["config"] = config;
    }
    if (miter !== null) {
        params["miter"] = miter;
    }
    if (lambda !== null) {
        params["lambda"] = lambda;
    }
    if (regmod !== null) {
        params["regmod"] = regmod;
    }
    if (minmet !== null) {
        params["minmet"] = minmet;
    }
    if (splineorder !== null) {
        params["splineorder"] = splineorder;
    }
    if (numprec !== null) {
        params["numprec"] = numprec;
    }
    if (interp !== null) {
        params["interp"] = interp;
    }
    if (nthr !== null) {
        params["nthr"] = nthr;
    }
    return params;
}


function topup_cargs(
    params: TopupParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("topup");
    cargs.push(["--imain=", execution.inputFile((params["imain"] ?? null))].join(''));
    cargs.push(["--datain=", execution.inputFile((params["datain"] ?? null))].join(''));
    if ((params["out"] ?? null) !== null) {
        cargs.push(["--out=", (params["out"] ?? null)].join(''));
    }
    if ((params["fout"] ?? null) !== null) {
        cargs.push(["--fout=", (params["fout"] ?? null)].join(''));
    }
    if ((params["iout"] ?? null) !== null) {
        cargs.push(["--iout=", (params["iout"] ?? null)].join(''));
    }
    if ((params["logout"] ?? null) !== null) {
        cargs.push(["--logout=", (params["logout"] ?? null)].join(''));
    }
    if ((params["warpres"] ?? null) !== null) {
        cargs.push(["--warpres=", String((params["warpres"] ?? null))].join(''));
    }
    if ((params["subsamp"] ?? null) !== null) {
        cargs.push(["--subsamp=", String((params["subsamp"] ?? null))].join(''));
    }
    if ((params["fwhm"] ?? null) !== null) {
        cargs.push(["--fwhm=", String((params["fwhm"] ?? null))].join(''));
    }
    if ((params["config"] ?? null) !== null) {
        cargs.push(["--config=", execution.inputFile((params["config"] ?? null))].join(''));
    }
    if ((params["miter"] ?? null) !== null) {
        cargs.push(["--miter=", String((params["miter"] ?? null))].join(''));
    }
    if ((params["lambda"] ?? null) !== null) {
        cargs.push(["--lambda=", String((params["lambda"] ?? null))].join(''));
    }
    if ((params["ssqlambda"] ?? null)) {
        cargs.push("--ssqlambda");
    }
    if ((params["regmod"] ?? null) !== null) {
        cargs.push(["--regmod=", (params["regmod"] ?? null)].join(''));
    }
    if ((params["estmov"] ?? null)) {
        cargs.push("--estmov");
    }
    if ((params["minmet"] ?? null) !== null) {
        cargs.push(["--minmet=", String((params["minmet"] ?? null))].join(''));
    }
    if ((params["splineorder"] ?? null) !== null) {
        cargs.push(["--splineorder=", String((params["splineorder"] ?? null))].join(''));
    }
    if ((params["numprec"] ?? null) !== null) {
        cargs.push(["--numprec=", (params["numprec"] ?? null)].join(''));
    }
    if ((params["interp"] ?? null) !== null) {
        cargs.push(["--interp=", (params["interp"] ?? null)].join(''));
    }
    if ((params["scale"] ?? null)) {
        cargs.push("--scale");
    }
    if ((params["regrid"] ?? null)) {
        cargs.push("--regrid");
    }
    if ((params["nthr"] ?? null) !== null) {
        cargs.push(["--nthr=", String((params["nthr"] ?? null))].join(''));
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("--verbose");
    }
    return cargs;
}


function topup_outputs(
    params: TopupParameters,
    execution: Execution,
): TopupOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TopupOutputs = {
        root: execution.outputFile("."),
        fieldcoef: ((params["out"] ?? null) !== null) ? execution.outputFile([(params["out"] ?? null), "_fieldcoef.nii.gz"].join('')) : null,
        movpar: ((params["out"] ?? null) !== null) ? execution.outputFile([(params["out"] ?? null), "_movpar.txt"].join('')) : null,
        fout: ((params["fout"] ?? null) !== null) ? execution.outputFile([(params["fout"] ?? null)].join('')) : null,
        iout: ((params["iout"] ?? null) !== null) ? execution.outputFile([(params["iout"] ?? null)].join('')) : null,
        logout: ((params["logout"] ?? null) !== null) ? execution.outputFile([(params["logout"] ?? null)].join('')) : null,
    };
    return ret;
}


function topup_execute(
    params: TopupParameters,
    execution: Execution,
): TopupOutputs {
    /**
     * topup is part of FSL and is used to estimate and correct for susceptibility-induced distortions in echo planar imaging (EPI) data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TopupOutputs`).
     */
    params = execution.params(params)
    const cargs = topup_cargs(params, execution)
    const ret = topup_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function topup(
    imain: InputPathType,
    datain: InputPathType,
    out: string | null = null,
    fout: string | null = null,
    iout: string | null = null,
    logout: string | null = null,
    warpres: number | null = null,
    subsamp: number | null = null,
    fwhm: number | null = null,
    config: InputPathType | null = null,
    miter: number | null = null,
    lambda: number | null = null,
    ssqlambda: boolean = false,
    regmod: "membrane_energy" | "bending_energy" | null = null,
    estmov: boolean = false,
    minmet: 0 | 1 | null = null,
    splineorder: 2 | 3 | null = null,
    numprec: "double" | "float" | null = null,
    interp: "linear" | "spline" | null = null,
    scale: boolean = false,
    regrid: boolean = false,
    nthr: number | null = null,
    verbose: boolean = false,
    runner: Runner | null = null,
): TopupOutputs {
    /**
     * topup is part of FSL and is used to estimate and correct for susceptibility-induced distortions in echo planar imaging (EPI) data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param imain Name of 4D file with images
     * @param datain Name of text file with PE directions/times
     * @param out Base-name of output files (spline coefficients (Hz) and movement parameters)
     * @param fout Name of image file with field (Hz)
     * @param iout Name of 4D image file with unwarped images
     * @param logout Name of log-file
     * @param warpres (Approximate) resolution (in mm) of warp basis for the different sub-sampling levels, default 10
     * @param subsamp Sub-sampling scheme, default 1
     * @param fwhm FWHM (in mm) of gaussian smoothing kernel, default 8
     * @param config Name of config file specifying command line arguments
     * @param miter Max # of non-linear iterations, default 5
     * @param lambda Weight of regularisation, default depending on --ssqlambda and --regmod switches. See user documentation.
     * @param ssqlambda If set (=1), lambda is weighted by current ssq, default 1
     * @param regmod Model for regularisation of warp-field [membrane_energy bending_energy], default bending_energy
     * @param estmov Estimate movements if set, default 1 (true)
     * @param minmet Minimisation method 0=Levenberg-Marquardt, 1=Scaled Conjugate Gradient, default 0 (LM)
     * @param splineorder Order of spline, 2=Quadratic spline, 3=Cubic spline. Default=3
     * @param numprec Precision for representing Hessian, double or float. Default double
     * @param interp Image interpolation model, linear or spline. Default spline
     * @param scale If set (=1), the images are individually scaled to a common mean, default 0 (false)
     * @param regrid If set (=1), the calculations are done in a different grid, default 1 (true)
     * @param nthr Number of threads to use (cannot be greater than numbers of hardware cores), default 1
     * @param verbose Print diagnostic information while running
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TopupOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TOPUP_METADATA);
    const params = topup_params(imain, datain, out, fout, iout, logout, warpres, subsamp, fwhm, config, miter, lambda, ssqlambda, regmod, estmov, minmet, splineorder, numprec, interp, scale, regrid, nthr, verbose)
    return topup_execute(params, execution);
}


export {
      TOPUP_METADATA,
      TopupOutputs,
      TopupParameters,
      topup,
      topup_params,
};
