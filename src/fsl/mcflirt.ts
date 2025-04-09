// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MCFLIRT_METADATA: Metadata = {
    id: "b042797f3b245be7f01eb11a8323bf8237ce49ed.boutiques",
    name: "mcflirt",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface McflirtParameters {
    "__STYXTYPE__": "mcflirt";
    "in_file": InputPathType;
    "bins"?: number | null | undefined;
    "cost"?: "mutualinfo" | "woods" | "corratio" | "normcorr" | "normmi" | "leastsquares" | null | undefined;
    "dof"?: number | null | undefined;
    "init"?: InputPathType | null | undefined;
    "interpolation"?: "spline_final" | "nn_final" | "sinc_final" | null | undefined;
    "mean_vol": boolean;
    "out_file"?: string | null | undefined;
    "ref_file"?: InputPathType | null | undefined;
    "ref_vol"?: number | null | undefined;
    "rotation"?: number | null | undefined;
    "save_mats": boolean;
    "save_plots": boolean;
    "save_rmsabs": boolean;
    "save_rmsrel": boolean;
    "scaling"?: number | null | undefined;
    "smooth"?: number | null | undefined;
    "stages"?: number | null | undefined;
    "stats_imgs": boolean;
    "use_contour": boolean;
    "use_gradient": boolean;
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
        "mcflirt": mcflirt_cargs,
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
        "mcflirt": mcflirt_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mcflirt(...)`.
 *
 * @interface
 */
interface McflirtOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * A list of items which are an existing file name. Transformation matrices.
     */
    mat_file: OutputPathType;
    /**
     * Mean timeseries image (if mean_vol=true).
     */
    mean_img: OutputPathType | null;
    /**
     * Motion-corrected timeseries.
     */
    out_file: OutputPathType | null;
    /**
     * Text-file with motion parameters.
     */
    par_file: OutputPathType | null;
    /**
     * A list of items which are an existing file name. Absolute displacement parameters.
     */
    rmsabs_files: OutputPathType | null;
    /**
     * A list of items which are an existing file name. Relative displacement parameters.
     */
    rmsrel_files: OutputPathType | null;
    /**
     * Standard deviation image.
     */
    std_img: OutputPathType | null;
    /**
     * Variance image.
     */
    variance_img: OutputPathType | null;
}


function mcflirt_params(
    in_file: InputPathType,
    bins: number | null = null,
    cost: "mutualinfo" | "woods" | "corratio" | "normcorr" | "normmi" | "leastsquares" | null = null,
    dof: number | null = null,
    init: InputPathType | null = null,
    interpolation: "spline_final" | "nn_final" | "sinc_final" | null = null,
    mean_vol: boolean = false,
    out_file: string | null = null,
    ref_file: InputPathType | null = null,
    ref_vol: number | null = null,
    rotation: number | null = null,
    save_mats: boolean = false,
    save_plots: boolean = false,
    save_rmsabs: boolean = false,
    save_rmsrel: boolean = false,
    scaling: number | null = null,
    smooth: number | null = null,
    stages: number | null = null,
    stats_imgs: boolean = false,
    use_contour: boolean = false,
    use_gradient: boolean = false,
): McflirtParameters {
    /**
     * Build parameters.
    
     * @param in_file Timeseries to motion-correct.
     * @param bins Number of histogram bins.
     * @param cost 'mutualinfo' or 'woods' or 'corratio' or 'normcorr' or 'normmi' or 'leastsquares'. Cost function to optimize.
     * @param dof Degrees of freedom for the transformation.
     * @param init Initial transformation matrix.
     * @param interpolation 'spline' or 'nn' or 'sinc'. Interpolation method for transformation.
     * @param mean_vol Register to mean volume.
     * @param out_file File to write.
     * @param ref_file Target image for motion correction.
     * @param ref_vol Volume to align frames to.
     * @param rotation Scaling factor for rotation tolerances.
     * @param save_mats Save transformation matrices.
     * @param save_plots Save transformation parameters.
     * @param save_rmsabs Save rms displacement parameters.
     * @param save_rmsrel Save relative rms displacement parameters.
     * @param scaling Scaling factor to use.
     * @param smooth Smoothing factor for the cost function.
     * @param stages Stages (if 4, perform final search with sinc interpolation.
     * @param stats_imgs Produce variance and std. dev. images.
     * @param use_contour Run search on contour images.
     * @param use_gradient Run search on gradient images.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mcflirt" as const,
        "in_file": in_file,
        "mean_vol": mean_vol,
        "save_mats": save_mats,
        "save_plots": save_plots,
        "save_rmsabs": save_rmsabs,
        "save_rmsrel": save_rmsrel,
        "stats_imgs": stats_imgs,
        "use_contour": use_contour,
        "use_gradient": use_gradient,
    };
    if (bins !== null) {
        params["bins"] = bins;
    }
    if (cost !== null) {
        params["cost"] = cost;
    }
    if (dof !== null) {
        params["dof"] = dof;
    }
    if (init !== null) {
        params["init"] = init;
    }
    if (interpolation !== null) {
        params["interpolation"] = interpolation;
    }
    if (out_file !== null) {
        params["out_file"] = out_file;
    }
    if (ref_file !== null) {
        params["ref_file"] = ref_file;
    }
    if (ref_vol !== null) {
        params["ref_vol"] = ref_vol;
    }
    if (rotation !== null) {
        params["rotation"] = rotation;
    }
    if (scaling !== null) {
        params["scaling"] = scaling;
    }
    if (smooth !== null) {
        params["smooth"] = smooth;
    }
    if (stages !== null) {
        params["stages"] = stages;
    }
    return params;
}


function mcflirt_cargs(
    params: McflirtParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mcflirt");
    cargs.push(
        "-in",
        execution.inputFile((params["in_file"] ?? null))
    );
    if ((params["bins"] ?? null) !== null) {
        cargs.push(
            "-bins",
            String((params["bins"] ?? null))
        );
    }
    if ((params["cost"] ?? null) !== null) {
        cargs.push(
            "-cost",
            (params["cost"] ?? null)
        );
    }
    if ((params["dof"] ?? null) !== null) {
        cargs.push(
            "-dof",
            String((params["dof"] ?? null))
        );
    }
    if ((params["init"] ?? null) !== null) {
        cargs.push(
            "-init",
            execution.inputFile((params["init"] ?? null))
        );
    }
    if ((params["interpolation"] ?? null) !== null) {
        cargs.push(["-", (params["interpolation"] ?? null)].join(''));
    }
    if ((params["mean_vol"] ?? null)) {
        cargs.push("-meanvol");
    }
    if ((params["out_file"] ?? null) !== null) {
        cargs.push(
            "-out",
            (params["out_file"] ?? null)
        );
    }
    if ((params["ref_file"] ?? null) !== null) {
        cargs.push(
            "-reffile",
            execution.inputFile((params["ref_file"] ?? null))
        );
    }
    if ((params["ref_vol"] ?? null) !== null) {
        cargs.push(
            "-refvol",
            String((params["ref_vol"] ?? null))
        );
    }
    if ((params["rotation"] ?? null) !== null) {
        cargs.push(
            "-rotation",
            String((params["rotation"] ?? null))
        );
    }
    if ((params["save_mats"] ?? null)) {
        cargs.push("-mats");
    }
    if ((params["save_plots"] ?? null)) {
        cargs.push("-plots");
    }
    if ((params["save_rmsabs"] ?? null)) {
        cargs.push("-rmsabs");
    }
    if ((params["save_rmsrel"] ?? null)) {
        cargs.push("-rmsrel");
    }
    if ((params["scaling"] ?? null) !== null) {
        cargs.push(
            "-scaling",
            String((params["scaling"] ?? null))
        );
    }
    if ((params["smooth"] ?? null) !== null) {
        cargs.push(
            "-smooth",
            String((params["smooth"] ?? null))
        );
    }
    if ((params["stages"] ?? null) !== null) {
        cargs.push(
            "-stages",
            String((params["stages"] ?? null))
        );
    }
    if ((params["stats_imgs"] ?? null)) {
        cargs.push("-stats");
    }
    if ((params["use_contour"] ?? null)) {
        cargs.push("-edge");
    }
    if ((params["use_gradient"] ?? null)) {
        cargs.push("-gdt");
    }
    return cargs;
}


function mcflirt_outputs(
    params: McflirtParameters,
    execution: Execution,
): McflirtOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: McflirtOutputs = {
        root: execution.outputFile("."),
        mat_file: execution.outputFile(["MAT_*"].join('')),
        mean_img: ((params["out_file"] ?? null) !== null) ? execution.outputFile([(params["out_file"] ?? null), "_mean_reg.ext"].join('')) : null,
        out_file: ((params["out_file"] ?? null) !== null) ? execution.outputFile([(params["out_file"] ?? null)].join('')) : null,
        par_file: ((params["out_file"] ?? null) !== null) ? execution.outputFile([(params["out_file"] ?? null), ".par"].join('')) : null,
        rmsabs_files: ((params["out_file"] ?? null) !== null) ? execution.outputFile([(params["out_file"] ?? null), "_abs.rms"].join('')) : null,
        rmsrel_files: ((params["out_file"] ?? null) !== null) ? execution.outputFile([(params["out_file"] ?? null), "_rel.rms"].join('')) : null,
        std_img: ((params["out_file"] ?? null) !== null) ? execution.outputFile([(params["out_file"] ?? null), "_sigma.ext"].join('')) : null,
        variance_img: ((params["out_file"] ?? null) !== null) ? execution.outputFile([(params["out_file"] ?? null), "_variance.ext"].join('')) : null,
    };
    return ret;
}


function mcflirt_execute(
    params: McflirtParameters,
    execution: Execution,
): McflirtOutputs {
    /**
     * MCFLIRT is an intra-modal motion correction tool designed for use on fMRI time series and based on optimization and registration techniques used in FLIRT, a fully automated robust and accurate tool for linear (affine) inter- and inter-modal brain image registration.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `McflirtOutputs`).
     */
    params = execution.params(params)
    const cargs = mcflirt_cargs(params, execution)
    const ret = mcflirt_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mcflirt(
    in_file: InputPathType,
    bins: number | null = null,
    cost: "mutualinfo" | "woods" | "corratio" | "normcorr" | "normmi" | "leastsquares" | null = null,
    dof: number | null = null,
    init: InputPathType | null = null,
    interpolation: "spline_final" | "nn_final" | "sinc_final" | null = null,
    mean_vol: boolean = false,
    out_file: string | null = null,
    ref_file: InputPathType | null = null,
    ref_vol: number | null = null,
    rotation: number | null = null,
    save_mats: boolean = false,
    save_plots: boolean = false,
    save_rmsabs: boolean = false,
    save_rmsrel: boolean = false,
    scaling: number | null = null,
    smooth: number | null = null,
    stages: number | null = null,
    stats_imgs: boolean = false,
    use_contour: boolean = false,
    use_gradient: boolean = false,
    runner: Runner | null = null,
): McflirtOutputs {
    /**
     * MCFLIRT is an intra-modal motion correction tool designed for use on fMRI time series and based on optimization and registration techniques used in FLIRT, a fully automated robust and accurate tool for linear (affine) inter- and inter-modal brain image registration.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param in_file Timeseries to motion-correct.
     * @param bins Number of histogram bins.
     * @param cost 'mutualinfo' or 'woods' or 'corratio' or 'normcorr' or 'normmi' or 'leastsquares'. Cost function to optimize.
     * @param dof Degrees of freedom for the transformation.
     * @param init Initial transformation matrix.
     * @param interpolation 'spline' or 'nn' or 'sinc'. Interpolation method for transformation.
     * @param mean_vol Register to mean volume.
     * @param out_file File to write.
     * @param ref_file Target image for motion correction.
     * @param ref_vol Volume to align frames to.
     * @param rotation Scaling factor for rotation tolerances.
     * @param save_mats Save transformation matrices.
     * @param save_plots Save transformation parameters.
     * @param save_rmsabs Save rms displacement parameters.
     * @param save_rmsrel Save relative rms displacement parameters.
     * @param scaling Scaling factor to use.
     * @param smooth Smoothing factor for the cost function.
     * @param stages Stages (if 4, perform final search with sinc interpolation.
     * @param stats_imgs Produce variance and std. dev. images.
     * @param use_contour Run search on contour images.
     * @param use_gradient Run search on gradient images.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `McflirtOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MCFLIRT_METADATA);
    const params = mcflirt_params(in_file, bins, cost, dof, init, interpolation, mean_vol, out_file, ref_file, ref_vol, rotation, save_mats, save_plots, save_rmsabs, save_rmsrel, scaling, smooth, stages, stats_imgs, use_contour, use_gradient)
    return mcflirt_execute(params, execution);
}


export {
      MCFLIRT_METADATA,
      McflirtOutputs,
      McflirtParameters,
      mcflirt,
      mcflirt_params,
};
