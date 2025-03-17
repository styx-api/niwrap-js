// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_AVERAGE_METADATA: Metadata = {
    id: "69d82dea302095f344b973c4241c98b9f485dab8.boutiques",
    name: "mri_average",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriAverageParameters {
    "__STYXTYPE__": "mri_average";
    "input_volumes": Array<InputPathType>;
    "output_volume": string;
    "rigid_alignment": boolean;
    "read_from_file": boolean;
    "dt"?: number | null | undefined;
    "tol"?: number | null | undefined;
    "conform": boolean;
    "noconform": boolean;
    "reduce"?: number | null | undefined;
    "sinc_interpolation"?: number | null | undefined;
    "trilinear": boolean;
    "window": boolean;
    "snapshots"?: number | null | undefined;
    "translation"?: Array<number> | null | undefined;
    "rotation"?: Array<number> | null | undefined;
    "momentum"?: number | null | undefined;
    "rms": boolean;
    "rms_alt": boolean;
    "percent": boolean;
    "binarize"?: number | null | undefined;
    "absolute": boolean;
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
        "mri_average": mri_average_cargs,
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
        "mri_average": mri_average_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_average(...)`.
 *
 * @interface
 */
interface MriAverageOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The averaged output volume.
     */
    output_file: OutputPathType;
}


function mri_average_params(
    input_volumes: Array<InputPathType>,
    output_volume: string,
    rigid_alignment: boolean = false,
    read_from_file: boolean = false,
    dt: number | null = null,
    tol: number | null = null,
    conform: boolean = false,
    noconform: boolean = false,
    reduce: number | null = null,
    sinc_interpolation: number | null = null,
    trilinear: boolean = false,
    window: boolean = false,
    snapshots: number | null = null,
    translation: Array<number> | null = null,
    rotation: Array<number> | null = null,
    momentum: number | null = null,
    rms: boolean = false,
    rms_alt: boolean = false,
    percent: boolean = false,
    binarize: number | null = null,
    absolute: boolean = false,
): MriAverageParameters {
    /**
     * Build parameters.
    
     * @param input_volumes Input volumes to average.
     * @param output_volume Output volume file.
     * @param rigid_alignment Rigid alignment of input volumes before averaging.
     * @param read_from_file Read volumes from an input file (first argument is the input filename).
     * @param dt Set dt to n (default=1e-6).
     * @param tol Set tolerance to n (default=1e-5).
     * @param conform Interpolate volume to be isotropic 1mm^3 (on by default).
     * @param noconform Inhibit isotropic volume interpolation.
     * @param reduce Reduce input images n (default=2) times.
     * @param sinc_interpolation Using sinc interpolation with window width of 2*n (default=3).
     * @param trilinear Use trilinear interpolation.
     * @param window Apply hanning window to volumes.
     * @param snapshots Write snapshots every n iterations.
     * @param translation Translation of second volume.
     * @param rotation Rotation of second volume around each axis in degrees.
     * @param momentum Use momentum n (default=0).
     * @param rms Compute sqrt of average of sum of squares (RMS, same as -rms).
     * @param rms_alt Compute sqrt of average of sum of squares (RMS, same as -sqr).
     * @param percent Compute percentage.
     * @param binarize Binarize the input volumes using threshold th.
     * @param absolute Take absolute value of volume.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_average" as const,
        "input_volumes": input_volumes,
        "output_volume": output_volume,
        "rigid_alignment": rigid_alignment,
        "read_from_file": read_from_file,
        "conform": conform,
        "noconform": noconform,
        "trilinear": trilinear,
        "window": window,
        "rms": rms,
        "rms_alt": rms_alt,
        "percent": percent,
        "absolute": absolute,
    };
    if (dt !== null) {
        params["dt"] = dt;
    }
    if (tol !== null) {
        params["tol"] = tol;
    }
    if (reduce !== null) {
        params["reduce"] = reduce;
    }
    if (sinc_interpolation !== null) {
        params["sinc_interpolation"] = sinc_interpolation;
    }
    if (snapshots !== null) {
        params["snapshots"] = snapshots;
    }
    if (translation !== null) {
        params["translation"] = translation;
    }
    if (rotation !== null) {
        params["rotation"] = rotation;
    }
    if (momentum !== null) {
        params["momentum"] = momentum;
    }
    if (binarize !== null) {
        params["binarize"] = binarize;
    }
    return params;
}


function mri_average_cargs(
    params: MriAverageParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_average");
    cargs.push(...(params["input_volumes"] ?? null).map(f => execution.inputFile(f)));
    cargs.push((params["output_volume"] ?? null));
    if ((params["rigid_alignment"] ?? null)) {
        cargs.push("-a");
    }
    if ((params["read_from_file"] ?? null)) {
        cargs.push("-F");
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
    if ((params["conform"] ?? null)) {
        cargs.push("-conform");
    }
    if ((params["noconform"] ?? null)) {
        cargs.push("-noconform");
    }
    if ((params["reduce"] ?? null) !== null) {
        cargs.push(
            "-reduce",
            String((params["reduce"] ?? null))
        );
    }
    if ((params["sinc_interpolation"] ?? null) !== null) {
        cargs.push(
            "-sinc",
            String((params["sinc_interpolation"] ?? null))
        );
    }
    if ((params["trilinear"] ?? null)) {
        cargs.push("-trilinear");
    }
    if ((params["window"] ?? null)) {
        cargs.push("-window");
    }
    if ((params["snapshots"] ?? null) !== null) {
        cargs.push(
            "-w",
            String((params["snapshots"] ?? null))
        );
    }
    if ((params["translation"] ?? null) !== null) {
        cargs.push(
            "-t",
            ...(params["translation"] ?? null).map(String)
        );
    }
    if ((params["rotation"] ?? null) !== null) {
        cargs.push(
            "-r",
            ...(params["rotation"] ?? null).map(String)
        );
    }
    if ((params["momentum"] ?? null) !== null) {
        cargs.push(
            "-m",
            String((params["momentum"] ?? null))
        );
    }
    if ((params["rms"] ?? null)) {
        cargs.push("-sqr");
    }
    if ((params["rms_alt"] ?? null)) {
        cargs.push("-rms");
    }
    if ((params["percent"] ?? null)) {
        cargs.push("-p");
    }
    if ((params["binarize"] ?? null) !== null) {
        cargs.push(
            "-b",
            String((params["binarize"] ?? null))
        );
    }
    if ((params["absolute"] ?? null)) {
        cargs.push("-abs");
    }
    return cargs;
}


function mri_average_outputs(
    params: MriAverageParameters,
    execution: Execution,
): MriAverageOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriAverageOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output_volume"] ?? null)].join('')),
    };
    return ret;
}


function mri_average_execute(
    params: MriAverageParameters,
    execution: Execution,
): MriAverageOutputs {
    /**
     * Averages multiple volumes with various options for alignment, interpolation, and transformations.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriAverageOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_average_cargs(params, execution)
    const ret = mri_average_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_average(
    input_volumes: Array<InputPathType>,
    output_volume: string,
    rigid_alignment: boolean = false,
    read_from_file: boolean = false,
    dt: number | null = null,
    tol: number | null = null,
    conform: boolean = false,
    noconform: boolean = false,
    reduce: number | null = null,
    sinc_interpolation: number | null = null,
    trilinear: boolean = false,
    window: boolean = false,
    snapshots: number | null = null,
    translation: Array<number> | null = null,
    rotation: Array<number> | null = null,
    momentum: number | null = null,
    rms: boolean = false,
    rms_alt: boolean = false,
    percent: boolean = false,
    binarize: number | null = null,
    absolute: boolean = false,
    runner: Runner | null = null,
): MriAverageOutputs {
    /**
     * Averages multiple volumes with various options for alignment, interpolation, and transformations.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_volumes Input volumes to average.
     * @param output_volume Output volume file.
     * @param rigid_alignment Rigid alignment of input volumes before averaging.
     * @param read_from_file Read volumes from an input file (first argument is the input filename).
     * @param dt Set dt to n (default=1e-6).
     * @param tol Set tolerance to n (default=1e-5).
     * @param conform Interpolate volume to be isotropic 1mm^3 (on by default).
     * @param noconform Inhibit isotropic volume interpolation.
     * @param reduce Reduce input images n (default=2) times.
     * @param sinc_interpolation Using sinc interpolation with window width of 2*n (default=3).
     * @param trilinear Use trilinear interpolation.
     * @param window Apply hanning window to volumes.
     * @param snapshots Write snapshots every n iterations.
     * @param translation Translation of second volume.
     * @param rotation Rotation of second volume around each axis in degrees.
     * @param momentum Use momentum n (default=0).
     * @param rms Compute sqrt of average of sum of squares (RMS, same as -rms).
     * @param rms_alt Compute sqrt of average of sum of squares (RMS, same as -sqr).
     * @param percent Compute percentage.
     * @param binarize Binarize the input volumes using threshold th.
     * @param absolute Take absolute value of volume.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriAverageOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_AVERAGE_METADATA);
    const params = mri_average_params(input_volumes, output_volume, rigid_alignment, read_from_file, dt, tol, conform, noconform, reduce, sinc_interpolation, trilinear, window, snapshots, translation, rotation, momentum, rms, rms_alt, percent, binarize, absolute)
    return mri_average_execute(params, execution);
}


export {
      MRI_AVERAGE_METADATA,
      MriAverageOutputs,
      MriAverageParameters,
      mri_average,
      mri_average_params,
};
