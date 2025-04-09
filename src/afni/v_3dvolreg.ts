// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3DVOLREG_METADATA: Metadata = {
    id: "568c36c7af9d384ea17acfcd37efb9dd6f74758e.boutiques",
    name: "3dvolreg",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dvolregParameters {
    "__STYXTYPE__": "3dvolreg";
    "copyorigin": boolean;
    "twopass": boolean;
    "Fourier": boolean;
    "in_weight_volume"?: Array<string> | null | undefined;
    "in_weight_volume_2"?: InputPathType | null | undefined;
    "interp"?: "fourier" | "cubic" | "heptic" | "quintic" | "linear" | null | undefined;
    "num_threads"?: number | null | undefined;
    "outputtype"?: "NIFTI" | "AFNI" | "NIFTI_GZ" | null | undefined;
    "timeshift": boolean;
    "verbose": boolean;
    "basefile"?: InputPathType | null | undefined;
    "zpad"?: number | null | undefined;
    "prefix": string;
    "Maxdisp1d"?: string | null | undefined;
    "in_file": InputPathType;
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
        "3dvolreg": v_3dvolreg_cargs,
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
        "3dvolreg": v_3dvolreg_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3dvolreg(...)`.
 *
 * @interface
 */
interface V3dvolregOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Max displacement output file.
     */
    md1d_file: OutputPathType;
    /**
     * 1d movement parameters output file.
     */
    oned_file: OutputPathType;
    /**
     * Save the matrix transformation.
     */
    oned_matrix_save: OutputPathType;
    /**
     * Max displacement info file.
     */
    md1d_file_: OutputPathType;
    /**
     * Movement parameters info file.
     */
    oned_file_: OutputPathType;
    /**
     * Matrix transformation from base to input.
     */
    oned_matrix_save_: OutputPathType;
    /**
     * Registered file.
     */
    out_file: OutputPathType;
}


function v_3dvolreg_params(
    prefix: string,
    in_file: InputPathType,
    copyorigin: boolean = false,
    twopass: boolean = false,
    fourier: boolean = false,
    in_weight_volume: Array<string> | null = null,
    in_weight_volume_2: InputPathType | null = null,
    interp: "fourier" | "cubic" | "heptic" | "quintic" | "linear" | null = null,
    num_threads: number | null = null,
    outputtype: "NIFTI" | "AFNI" | "NIFTI_GZ" | null = null,
    timeshift: boolean = false,
    verbose: boolean = false,
    basefile: InputPathType | null = null,
    zpad: number | null = null,
    maxdisp1d: string | null = null,
): V3dvolregParameters {
    /**
     * Build parameters.
    
     * @param prefix Prefix
     * @param in_file Input file to 3dvolreg.
     * @param copyorigin Copy base file origin coords to output.
     * @param twopass Do two passes of the registration algorithm
     * @param fourier Perform the alignments using Fourier interpolation.
     * @param in_weight_volume (file or string, an integer) or file or string. Weights for each voxel specified by a file with an optional volume number (defaults to 0).
     * @param in_weight_volume_2 (file or string, an integer) or file or string. Weights for each voxel specified by a file with an optional volume number (defaults to 0).
     * @param interp 'fourier' or 'cubic' or 'heptic' or 'quintic' or 'linear'. Spatial interpolation methods [default = heptic].
     * @param num_threads Set number of threads.
     * @param outputtype 'nifti' or 'afni' or 'nifti_gz'. Afni output filetype.
     * @param timeshift Time shift to mean slice time offset.
     * @param verbose More detailed description of the process.
     * @param basefile Base file for registration.
     * @param zpad Zeropad around the edges by 'n' voxels during rotations.
     * @param maxdisp1d Do '-maxdisp' and also write the max displacement for each sub-brick into file 'mm' in 1D (columnar) format.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dvolreg" as const,
        "copyorigin": copyorigin,
        "twopass": twopass,
        "Fourier": fourier,
        "timeshift": timeshift,
        "verbose": verbose,
        "prefix": prefix,
        "in_file": in_file,
    };
    if (in_weight_volume !== null) {
        params["in_weight_volume"] = in_weight_volume;
    }
    if (in_weight_volume_2 !== null) {
        params["in_weight_volume_2"] = in_weight_volume_2;
    }
    if (interp !== null) {
        params["interp"] = interp;
    }
    if (num_threads !== null) {
        params["num_threads"] = num_threads;
    }
    if (outputtype !== null) {
        params["outputtype"] = outputtype;
    }
    if (basefile !== null) {
        params["basefile"] = basefile;
    }
    if (zpad !== null) {
        params["zpad"] = zpad;
    }
    if (maxdisp1d !== null) {
        params["Maxdisp1d"] = maxdisp1d;
    }
    return params;
}


function v_3dvolreg_cargs(
    params: V3dvolregParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dvolreg");
    if ((params["copyorigin"] ?? null)) {
        cargs.push("-twodup");
    }
    if ((params["twopass"] ?? null)) {
        cargs.push("-twopass");
    }
    if ((params["Fourier"] ?? null)) {
        cargs.push("-Fourier");
    }
    if ((params["in_weight_volume"] ?? null) !== null) {
        cargs.push(
            "-weight '",
            ...(params["in_weight_volume"] ?? null)
        );
    }
    if ((params["in_weight_volume_2"] ?? null) !== null) {
        cargs.push(
            "-weight '",
            execution.inputFile((params["in_weight_volume_2"] ?? null))
        );
    }
    if ((params["interp"] ?? null) !== null) {
        cargs.push(
            "-",
            (params["interp"] ?? null)
        );
    }
    if ((params["num_threads"] ?? null) !== null) {
        cargs.push(String((params["num_threads"] ?? null)));
    }
    if ((params["outputtype"] ?? null) !== null) {
        cargs.push((params["outputtype"] ?? null));
    }
    if ((params["timeshift"] ?? null)) {
        cargs.push("-tshift 0");
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("-verbose");
    }
    if ((params["basefile"] ?? null) !== null) {
        cargs.push(
            "-base",
            execution.inputFile((params["basefile"] ?? null))
        );
    }
    if ((params["zpad"] ?? null) !== null) {
        cargs.push(
            "-zpad",
            String((params["zpad"] ?? null))
        );
    }
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    if ((params["Maxdisp1d"] ?? null) !== null) {
        cargs.push(
            "-maxdisp1d",
            (params["Maxdisp1d"] ?? null)
        );
    }
    cargs.push(execution.inputFile((params["in_file"] ?? null)));
    return cargs;
}


function v_3dvolreg_outputs(
    params: V3dvolregParameters,
    execution: Execution,
): V3dvolregOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dvolregOutputs = {
        root: execution.outputFile("."),
        md1d_file: execution.outputFile([(params["prefix"] ?? null), "_md.1D"].join('')),
        oned_file: execution.outputFile([(params["prefix"] ?? null), ".1D"].join('')),
        oned_matrix_save: execution.outputFile([(params["prefix"] ?? null), ".aff12.1D"].join('')),
        md1d_file_: execution.outputFile(["md1d_file"].join('')),
        oned_file_: execution.outputFile(["oned_file"].join('')),
        oned_matrix_save_: execution.outputFile(["oned_matrix_save"].join('')),
        out_file: execution.outputFile([(params["prefix"] ?? null)].join('')),
    };
    return ret;
}


function v_3dvolreg_execute(
    params: V3dvolregParameters,
    execution: Execution,
): V3dvolregOutputs {
    /**
     * Register input volumes to a base volume using AFNI 3dvolreg command.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dvolregOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3dvolreg_cargs(params, execution)
    const ret = v_3dvolreg_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3dvolreg(
    prefix: string,
    in_file: InputPathType,
    copyorigin: boolean = false,
    twopass: boolean = false,
    fourier: boolean = false,
    in_weight_volume: Array<string> | null = null,
    in_weight_volume_2: InputPathType | null = null,
    interp: "fourier" | "cubic" | "heptic" | "quintic" | "linear" | null = null,
    num_threads: number | null = null,
    outputtype: "NIFTI" | "AFNI" | "NIFTI_GZ" | null = null,
    timeshift: boolean = false,
    verbose: boolean = false,
    basefile: InputPathType | null = null,
    zpad: number | null = null,
    maxdisp1d: string | null = null,
    runner: Runner | null = null,
): V3dvolregOutputs {
    /**
     * Register input volumes to a base volume using AFNI 3dvolreg command.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param prefix Prefix
     * @param in_file Input file to 3dvolreg.
     * @param copyorigin Copy base file origin coords to output.
     * @param twopass Do two passes of the registration algorithm
     * @param fourier Perform the alignments using Fourier interpolation.
     * @param in_weight_volume (file or string, an integer) or file or string. Weights for each voxel specified by a file with an optional volume number (defaults to 0).
     * @param in_weight_volume_2 (file or string, an integer) or file or string. Weights for each voxel specified by a file with an optional volume number (defaults to 0).
     * @param interp 'fourier' or 'cubic' or 'heptic' or 'quintic' or 'linear'. Spatial interpolation methods [default = heptic].
     * @param num_threads Set number of threads.
     * @param outputtype 'nifti' or 'afni' or 'nifti_gz'. Afni output filetype.
     * @param timeshift Time shift to mean slice time offset.
     * @param verbose More detailed description of the process.
     * @param basefile Base file for registration.
     * @param zpad Zeropad around the edges by 'n' voxels during rotations.
     * @param maxdisp1d Do '-maxdisp' and also write the max displacement for each sub-brick into file 'mm' in 1D (columnar) format.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dvolregOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3DVOLREG_METADATA);
    const params = v_3dvolreg_params(prefix, in_file, copyorigin, twopass, fourier, in_weight_volume, in_weight_volume_2, interp, num_threads, outputtype, timeshift, verbose, basefile, zpad, maxdisp1d)
    return v_3dvolreg_execute(params, execution);
}


export {
      V3dvolregOutputs,
      V3dvolregParameters,
      V_3DVOLREG_METADATA,
      v_3dvolreg,
      v_3dvolreg_params,
};
