// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_EM_REGISTER_METADATA: Metadata = {
    id: "8836c49a04dd6a9dcc02bd9442c70610816e97b7.boutiques",
    name: "mri_em_register",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriEmRegisterParameters {
    "__STYXTYPE__": "mri_em_register";
    "input_volume": InputPathType;
    "template_gca": InputPathType;
    "output_transform": string;
    "distance"?: number | null | undefined;
    "nomap": boolean;
    "flash": boolean;
    "mask"?: InputPathType | null | undefined;
    "skull": boolean;
    "uns"?: number | null | undefined;
    "diag"?: string | null | undefined;
    "debug_voxel"?: Array<number> | null | undefined;
    "debug_label"?: number | null | undefined;
    "tr"?: number | null | undefined;
    "te"?: number | null | undefined;
    "alpha"?: number | null | undefined;
    "example"?: Array<InputPathType> | null | undefined;
    "samples"?: string | null | undefined;
    "fsamples"?: string | null | undefined;
    "nsamples"?: string | null | undefined;
    "contrast": boolean;
    "flash_parms"?: InputPathType | null | undefined;
    "transonly": boolean;
    "write_mean"?: string | null | undefined;
    "prior"?: number | null | undefined;
    "spacing"?: number | null | undefined;
    "scales"?: number | null | undefined;
    "novar": boolean;
    "dt"?: number | null | undefined;
    "tol"?: number | null | undefined;
    "center": boolean;
    "noscale": boolean;
    "noiscale": boolean;
    "num_transforms"?: number | null | undefined;
    "area"?: number | null | undefined;
    "nlarea"?: number | null | undefined;
    "levels"?: number | null | undefined;
    "intensity"?: number | null | undefined;
    "reduce"?: number | null | undefined;
    "n_samples"?: number | null | undefined;
    "norm"?: string | null | undefined;
    "trans"?: number | null | undefined;
    "steps"?: number | null | undefined;
    "long_reg"?: string | null | undefined;
    "cpfile"?: InputPathType | null | undefined;
    "translation_vector"?: Array<number> | null | undefined;
    "rotation_vector"?: Array<number> | null | undefined;
    "xform"?: string | null | undefined;
    "blur"?: number | null | undefined;
    "diagno": boolean;
    "s"?: number | null | undefined;
    "max_angle"?: number | null | undefined;
    "niters"?: number | null | undefined;
    "write_iters"?: number | null | undefined;
    "ctl_point_pct"?: number | null | undefined;
    "momentum"?: number | null | undefined;
    "threads"?: number | null | undefined;
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
        "mri_em_register": mri_em_register_cargs,
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
        "mri_em_register": mri_em_register_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_em_register(...)`.
 *
 * @interface
 */
interface MriEmRegisterOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Transform in LTA format
     */
    output_transform_file: OutputPathType;
}


function mri_em_register_params(
    input_volume: InputPathType,
    template_gca: InputPathType,
    output_transform: string,
    distance: number | null = null,
    nomap: boolean = false,
    flash: boolean = false,
    mask: InputPathType | null = null,
    skull: boolean = false,
    uns: number | null = null,
    diag: string | null = null,
    debug_voxel: Array<number> | null = null,
    debug_label: number | null = null,
    tr: number | null = null,
    te: number | null = null,
    alpha: number | null = null,
    example: Array<InputPathType> | null = null,
    samples: string | null = null,
    fsamples: string | null = null,
    nsamples: string | null = null,
    contrast: boolean = false,
    flash_parms: InputPathType | null = null,
    transonly: boolean = false,
    write_mean: string | null = null,
    prior: number | null = null,
    spacing: number | null = null,
    scales: number | null = null,
    novar: boolean = false,
    dt: number | null = null,
    tol: number | null = null,
    center: boolean = false,
    noscale: boolean = false,
    noiscale: boolean = false,
    num_transforms: number | null = null,
    area: number | null = null,
    nlarea: number | null = null,
    levels: number | null = null,
    intensity: number | null = null,
    reduce: number | null = null,
    n_samples: number | null = null,
    norm: string | null = null,
    trans: number | null = null,
    steps: number | null = null,
    long_reg: string | null = null,
    cpfile: InputPathType | null = null,
    translation_vector: Array<number> | null = null,
    rotation_vector: Array<number> | null = null,
    xform: string | null = null,
    blur: number | null = null,
    diagno: boolean = false,
    s: number | null = null,
    max_angle: number | null = null,
    niters: number | null = null,
    write_iters: number | null = null,
    ctl_point_pct: number | null = null,
    momentum: number | null = null,
    threads: number | null = null,
): MriEmRegisterParameters {
    /**
     * Build parameters.
    
     * @param input_volume Input brain volume
     * @param template_gca Template GCA file
     * @param output_transform Output transform name
     * @param distance Distance
     * @param nomap No map
     * @param flash Use FLASH forward model to predict intensity values
     * @param mask Use volname as a mask
     * @param skull Align to atlas containing skull (uns=5)
     * @param uns Align to atlas containing skull setting unknown_nbr_spacing = nbrspacing
     * @param diag Open diagfile for writing
     * @param debug_voxel Debug voxel (x, y, z)
     * @param debug_label Debug label (label)
     * @param tr Use TR msec
     * @param te Use TE msec
     * @param alpha Use alpha degrees
     * @param example Use T1 and seg as example T1 and segmentations respectively
     * @param samples Write control points to fname
     * @param fsamples Write transformed control points to fname
     * @param nsamples Write transformed normalization control points to fname
     * @param contrast Use contrast to find labels
     * @param flash_parms Use FLASH forward model and tissue parms in parameterfile to predict intensity values
     * @param transonly Only compute translation parameters
     * @param write_mean Write GCA means to fname
     * @param prior Use prior threshold min_prior
     * @param spacing Use max GCA spacing
     * @param scales Find optimal linear transform over int scales
     * @param novar Do not use variance estimates
     * @param dt DT parameter
     * @param tol Tolerance
     * @param center Use GCA centroid as origin of transform
     * @param noscale Disable scaling
     * @param noiscale Disable intensity scaling
     * @param num_transforms Find a total of num_xforms linear transforms
     * @param area Area
     * @param nlarea Non-linear area
     * @param levels Levels
     * @param intensity Intensity
     * @param reduce Reduce input images nreductions times before aligning
     * @param n_samples Using n samples of GCA
     * @param norm Normalize intensity and write to fname
     * @param trans Setting max translation search range to be max_trans
     * @param steps Taking max_angles angular steps
     * @param long_reg Longitudinal: read previously computed atlas xform and apply registration long_reg
     * @param cpfile Read manually defined control points from cpfile
     * @param translation_vector Translation vector (tx, ty, tz)
     * @param rotation_vector Rotation vector (rx, ry, rz)
     * @param xform Using previously computed transform xform
     * @param blur Blurring input image with sigma=blur_sigma
     * @param diagno Diago flag (unspecified function)
     * @param s Max angles
     * @param max_angle Max angle for rotational search in radians (def=15 deg)
     * @param niters Niterations = niters
     * @param write_iters Write iterations = write_iters
     * @param ctl_point_pct Use top pct percent wm points as control points
     * @param momentum Set momentum
     * @param threads Number of threads (nompthreads)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_em_register" as const,
        "input_volume": input_volume,
        "template_gca": template_gca,
        "output_transform": output_transform,
        "nomap": nomap,
        "flash": flash,
        "skull": skull,
        "contrast": contrast,
        "transonly": transonly,
        "novar": novar,
        "center": center,
        "noscale": noscale,
        "noiscale": noiscale,
        "diagno": diagno,
    };
    if (distance !== null) {
        params["distance"] = distance;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (uns !== null) {
        params["uns"] = uns;
    }
    if (diag !== null) {
        params["diag"] = diag;
    }
    if (debug_voxel !== null) {
        params["debug_voxel"] = debug_voxel;
    }
    if (debug_label !== null) {
        params["debug_label"] = debug_label;
    }
    if (tr !== null) {
        params["tr"] = tr;
    }
    if (te !== null) {
        params["te"] = te;
    }
    if (alpha !== null) {
        params["alpha"] = alpha;
    }
    if (example !== null) {
        params["example"] = example;
    }
    if (samples !== null) {
        params["samples"] = samples;
    }
    if (fsamples !== null) {
        params["fsamples"] = fsamples;
    }
    if (nsamples !== null) {
        params["nsamples"] = nsamples;
    }
    if (flash_parms !== null) {
        params["flash_parms"] = flash_parms;
    }
    if (write_mean !== null) {
        params["write_mean"] = write_mean;
    }
    if (prior !== null) {
        params["prior"] = prior;
    }
    if (spacing !== null) {
        params["spacing"] = spacing;
    }
    if (scales !== null) {
        params["scales"] = scales;
    }
    if (dt !== null) {
        params["dt"] = dt;
    }
    if (tol !== null) {
        params["tol"] = tol;
    }
    if (num_transforms !== null) {
        params["num_transforms"] = num_transforms;
    }
    if (area !== null) {
        params["area"] = area;
    }
    if (nlarea !== null) {
        params["nlarea"] = nlarea;
    }
    if (levels !== null) {
        params["levels"] = levels;
    }
    if (intensity !== null) {
        params["intensity"] = intensity;
    }
    if (reduce !== null) {
        params["reduce"] = reduce;
    }
    if (n_samples !== null) {
        params["n_samples"] = n_samples;
    }
    if (norm !== null) {
        params["norm"] = norm;
    }
    if (trans !== null) {
        params["trans"] = trans;
    }
    if (steps !== null) {
        params["steps"] = steps;
    }
    if (long_reg !== null) {
        params["long_reg"] = long_reg;
    }
    if (cpfile !== null) {
        params["cpfile"] = cpfile;
    }
    if (translation_vector !== null) {
        params["translation_vector"] = translation_vector;
    }
    if (rotation_vector !== null) {
        params["rotation_vector"] = rotation_vector;
    }
    if (xform !== null) {
        params["xform"] = xform;
    }
    if (blur !== null) {
        params["blur"] = blur;
    }
    if (s !== null) {
        params["s"] = s;
    }
    if (max_angle !== null) {
        params["max_angle"] = max_angle;
    }
    if (niters !== null) {
        params["niters"] = niters;
    }
    if (write_iters !== null) {
        params["write_iters"] = write_iters;
    }
    if (ctl_point_pct !== null) {
        params["ctl_point_pct"] = ctl_point_pct;
    }
    if (momentum !== null) {
        params["momentum"] = momentum;
    }
    if (threads !== null) {
        params["threads"] = threads;
    }
    return params;
}


function mri_em_register_cargs(
    params: MriEmRegisterParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_em_register");
    cargs.push(execution.inputFile((params["input_volume"] ?? null)));
    cargs.push(execution.inputFile((params["template_gca"] ?? null)));
    cargs.push((params["output_transform"] ?? null));
    if ((params["distance"] ?? null) !== null) {
        cargs.push(
            "-dist",
            String((params["distance"] ?? null))
        );
    }
    if ((params["nomap"] ?? null)) {
        cargs.push("-nomap");
    }
    if ((params["flash"] ?? null)) {
        cargs.push("-flash");
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["skull"] ?? null)) {
        cargs.push("-skull");
    }
    if ((params["uns"] ?? null) !== null) {
        cargs.push(
            "-uns",
            String((params["uns"] ?? null))
        );
    }
    if ((params["diag"] ?? null) !== null) {
        cargs.push(
            "-diag",
            (params["diag"] ?? null)
        );
    }
    if ((params["debug_voxel"] ?? null) !== null) {
        cargs.push(
            "-debug_voxel",
            ...(params["debug_voxel"] ?? null).map(String)
        );
    }
    if ((params["debug_label"] ?? null) !== null) {
        cargs.push(
            "-debug_label",
            String((params["debug_label"] ?? null))
        );
    }
    if ((params["tr"] ?? null) !== null) {
        cargs.push(
            "-tr",
            String((params["tr"] ?? null))
        );
    }
    if ((params["te"] ?? null) !== null) {
        cargs.push(
            "-te",
            String((params["te"] ?? null))
        );
    }
    if ((params["alpha"] ?? null) !== null) {
        cargs.push(
            "-alpha",
            String((params["alpha"] ?? null))
        );
    }
    if ((params["example"] ?? null) !== null) {
        cargs.push(
            "-example",
            ...(params["example"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["samples"] ?? null) !== null) {
        cargs.push(
            "-samples",
            (params["samples"] ?? null)
        );
    }
    if ((params["fsamples"] ?? null) !== null) {
        cargs.push(
            "-fsamples",
            (params["fsamples"] ?? null)
        );
    }
    if ((params["nsamples"] ?? null) !== null) {
        cargs.push(
            "-nsamples",
            (params["nsamples"] ?? null)
        );
    }
    if ((params["contrast"] ?? null)) {
        cargs.push("-contrast");
    }
    if ((params["flash_parms"] ?? null) !== null) {
        cargs.push(
            "-flash_parms",
            execution.inputFile((params["flash_parms"] ?? null))
        );
    }
    if ((params["transonly"] ?? null)) {
        cargs.push("-transonly");
    }
    if ((params["write_mean"] ?? null) !== null) {
        cargs.push(
            "-write_mean",
            (params["write_mean"] ?? null)
        );
    }
    if ((params["prior"] ?? null) !== null) {
        cargs.push(
            "-prior",
            String((params["prior"] ?? null))
        );
    }
    if ((params["spacing"] ?? null) !== null) {
        cargs.push(
            "-spacing",
            String((params["spacing"] ?? null))
        );
    }
    if ((params["scales"] ?? null) !== null) {
        cargs.push(
            "-scales",
            String((params["scales"] ?? null))
        );
    }
    if ((params["novar"] ?? null)) {
        cargs.push("-novar");
    }
    if ((params["dt"] ?? null) !== null) {
        cargs.push(
            "-dt",
            String((params["dt"] ?? null))
        );
    }
    if ((params["tol"] ?? null) !== null) {
        cargs.push(
            "-tol",
            String((params["tol"] ?? null))
        );
    }
    if ((params["center"] ?? null)) {
        cargs.push("-center");
    }
    if ((params["noscale"] ?? null)) {
        cargs.push("-noscale");
    }
    if ((params["noiscale"] ?? null)) {
        cargs.push("-noiscale");
    }
    if ((params["num_transforms"] ?? null) !== null) {
        cargs.push(
            "-num",
            String((params["num_transforms"] ?? null))
        );
    }
    if ((params["area"] ?? null) !== null) {
        cargs.push(
            "-area",
            String((params["area"] ?? null))
        );
    }
    if ((params["nlarea"] ?? null) !== null) {
        cargs.push(
            "-nlarea",
            String((params["nlarea"] ?? null))
        );
    }
    if ((params["levels"] ?? null) !== null) {
        cargs.push(
            "-levels",
            String((params["levels"] ?? null))
        );
    }
    if ((params["intensity"] ?? null) !== null) {
        cargs.push(
            "-intensity",
            String((params["intensity"] ?? null))
        );
    }
    if ((params["reduce"] ?? null) !== null) {
        cargs.push(
            "-reduce",
            String((params["reduce"] ?? null))
        );
    }
    if ((params["n_samples"] ?? null) !== null) {
        cargs.push(
            "-nsamples",
            String((params["n_samples"] ?? null))
        );
    }
    if ((params["norm"] ?? null) !== null) {
        cargs.push(
            "-norm",
            (params["norm"] ?? null)
        );
    }
    if ((params["trans"] ?? null) !== null) {
        cargs.push(
            "-trans",
            String((params["trans"] ?? null))
        );
    }
    if ((params["steps"] ?? null) !== null) {
        cargs.push(
            "-steps",
            String((params["steps"] ?? null))
        );
    }
    if ((params["long_reg"] ?? null) !== null) {
        cargs.push(
            "-l",
            (params["long_reg"] ?? null)
        );
    }
    if ((params["cpfile"] ?? null) !== null) {
        cargs.push(
            "-f",
            execution.inputFile((params["cpfile"] ?? null))
        );
    }
    if ((params["translation_vector"] ?? null) !== null) {
        cargs.push(
            "-d",
            ...(params["translation_vector"] ?? null).map(String)
        );
    }
    if ((params["rotation_vector"] ?? null) !== null) {
        cargs.push(
            "-r",
            ...(params["rotation_vector"] ?? null).map(String)
        );
    }
    if ((params["xform"] ?? null) !== null) {
        cargs.push(
            "-t",
            (params["xform"] ?? null)
        );
    }
    if ((params["blur"] ?? null) !== null) {
        cargs.push(
            "-b",
            String((params["blur"] ?? null))
        );
    }
    if ((params["diagno"] ?? null)) {
        cargs.push("-v");
    }
    if ((params["s"] ?? null) !== null) {
        cargs.push(
            "-s",
            String((params["s"] ?? null))
        );
    }
    if ((params["max_angle"] ?? null) !== null) {
        cargs.push(
            "-max_angle",
            String((params["max_angle"] ?? null))
        );
    }
    if ((params["niters"] ?? null) !== null) {
        cargs.push(
            "-n",
            String((params["niters"] ?? null))
        );
    }
    if ((params["write_iters"] ?? null) !== null) {
        cargs.push(
            "-w",
            String((params["write_iters"] ?? null))
        );
    }
    if ((params["ctl_point_pct"] ?? null) !== null) {
        cargs.push(
            "-p",
            String((params["ctl_point_pct"] ?? null))
        );
    }
    if ((params["momentum"] ?? null) !== null) {
        cargs.push(
            "-m",
            String((params["momentum"] ?? null))
        );
    }
    if ((params["threads"] ?? null) !== null) {
        cargs.push(
            "-threads",
            String((params["threads"] ?? null))
        );
    }
    return cargs;
}


function mri_em_register_outputs(
    params: MriEmRegisterParameters,
    execution: Execution,
): MriEmRegisterOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriEmRegisterOutputs = {
        root: execution.outputFile("."),
        output_transform_file: execution.outputFile([(params["output_transform"] ?? null), ".lta"].join('')),
    };
    return ret;
}


function mri_em_register_execute(
    params: MriEmRegisterParameters,
    execution: Execution,
): MriEmRegisterOutputs {
    /**
     * This program creates a transform in lta format.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriEmRegisterOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_em_register_cargs(params, execution)
    const ret = mri_em_register_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_em_register(
    input_volume: InputPathType,
    template_gca: InputPathType,
    output_transform: string,
    distance: number | null = null,
    nomap: boolean = false,
    flash: boolean = false,
    mask: InputPathType | null = null,
    skull: boolean = false,
    uns: number | null = null,
    diag: string | null = null,
    debug_voxel: Array<number> | null = null,
    debug_label: number | null = null,
    tr: number | null = null,
    te: number | null = null,
    alpha: number | null = null,
    example: Array<InputPathType> | null = null,
    samples: string | null = null,
    fsamples: string | null = null,
    nsamples: string | null = null,
    contrast: boolean = false,
    flash_parms: InputPathType | null = null,
    transonly: boolean = false,
    write_mean: string | null = null,
    prior: number | null = null,
    spacing: number | null = null,
    scales: number | null = null,
    novar: boolean = false,
    dt: number | null = null,
    tol: number | null = null,
    center: boolean = false,
    noscale: boolean = false,
    noiscale: boolean = false,
    num_transforms: number | null = null,
    area: number | null = null,
    nlarea: number | null = null,
    levels: number | null = null,
    intensity: number | null = null,
    reduce: number | null = null,
    n_samples: number | null = null,
    norm: string | null = null,
    trans: number | null = null,
    steps: number | null = null,
    long_reg: string | null = null,
    cpfile: InputPathType | null = null,
    translation_vector: Array<number> | null = null,
    rotation_vector: Array<number> | null = null,
    xform: string | null = null,
    blur: number | null = null,
    diagno: boolean = false,
    s: number | null = null,
    max_angle: number | null = null,
    niters: number | null = null,
    write_iters: number | null = null,
    ctl_point_pct: number | null = null,
    momentum: number | null = null,
    threads: number | null = null,
    runner: Runner | null = null,
): MriEmRegisterOutputs {
    /**
     * This program creates a transform in lta format.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_volume Input brain volume
     * @param template_gca Template GCA file
     * @param output_transform Output transform name
     * @param distance Distance
     * @param nomap No map
     * @param flash Use FLASH forward model to predict intensity values
     * @param mask Use volname as a mask
     * @param skull Align to atlas containing skull (uns=5)
     * @param uns Align to atlas containing skull setting unknown_nbr_spacing = nbrspacing
     * @param diag Open diagfile for writing
     * @param debug_voxel Debug voxel (x, y, z)
     * @param debug_label Debug label (label)
     * @param tr Use TR msec
     * @param te Use TE msec
     * @param alpha Use alpha degrees
     * @param example Use T1 and seg as example T1 and segmentations respectively
     * @param samples Write control points to fname
     * @param fsamples Write transformed control points to fname
     * @param nsamples Write transformed normalization control points to fname
     * @param contrast Use contrast to find labels
     * @param flash_parms Use FLASH forward model and tissue parms in parameterfile to predict intensity values
     * @param transonly Only compute translation parameters
     * @param write_mean Write GCA means to fname
     * @param prior Use prior threshold min_prior
     * @param spacing Use max GCA spacing
     * @param scales Find optimal linear transform over int scales
     * @param novar Do not use variance estimates
     * @param dt DT parameter
     * @param tol Tolerance
     * @param center Use GCA centroid as origin of transform
     * @param noscale Disable scaling
     * @param noiscale Disable intensity scaling
     * @param num_transforms Find a total of num_xforms linear transforms
     * @param area Area
     * @param nlarea Non-linear area
     * @param levels Levels
     * @param intensity Intensity
     * @param reduce Reduce input images nreductions times before aligning
     * @param n_samples Using n samples of GCA
     * @param norm Normalize intensity and write to fname
     * @param trans Setting max translation search range to be max_trans
     * @param steps Taking max_angles angular steps
     * @param long_reg Longitudinal: read previously computed atlas xform and apply registration long_reg
     * @param cpfile Read manually defined control points from cpfile
     * @param translation_vector Translation vector (tx, ty, tz)
     * @param rotation_vector Rotation vector (rx, ry, rz)
     * @param xform Using previously computed transform xform
     * @param blur Blurring input image with sigma=blur_sigma
     * @param diagno Diago flag (unspecified function)
     * @param s Max angles
     * @param max_angle Max angle for rotational search in radians (def=15 deg)
     * @param niters Niterations = niters
     * @param write_iters Write iterations = write_iters
     * @param ctl_point_pct Use top pct percent wm points as control points
     * @param momentum Set momentum
     * @param threads Number of threads (nompthreads)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriEmRegisterOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_EM_REGISTER_METADATA);
    const params = mri_em_register_params(input_volume, template_gca, output_transform, distance, nomap, flash, mask, skull, uns, diag, debug_voxel, debug_label, tr, te, alpha, example, samples, fsamples, nsamples, contrast, flash_parms, transonly, write_mean, prior, spacing, scales, novar, dt, tol, center, noscale, noiscale, num_transforms, area, nlarea, levels, intensity, reduce, n_samples, norm, trans, steps, long_reg, cpfile, translation_vector, rotation_vector, xform, blur, diagno, s, max_angle, niters, write_iters, ctl_point_pct, momentum, threads)
    return mri_em_register_execute(params, execution);
}


export {
      MRI_EM_REGISTER_METADATA,
      MriEmRegisterOutputs,
      MriEmRegisterParameters,
      mri_em_register,
      mri_em_register_params,
};
