// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_INTENSITY_PROFILE_METADATA: Metadata = {
    id: "4503435a83a78998ccb884fce0c0c30ed9f78d3b.boutiques",
    name: "mris_intensity_profile",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisIntensityProfileParameters {
    "__STYXTYPE__": "mris_intensity_profile";
    "subject_name": string;
    "hemi": string;
    "volume": InputPathType;
    "output_file": string;
    "write_surf"?: string | null | undefined;
    "sdir"?: string | null | undefined;
    "white"?: string | null | undefined;
    "pial"?: string | null | undefined;
    "normalize_flag": boolean;
    "mean"?: string | null | undefined;
    "xform"?: InputPathType | null | undefined;
    "src"?: InputPathType | null | undefined;
    "dst"?: InputPathType | null | undefined;
    "invert_flag": boolean;
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
        "mris_intensity_profile": mris_intensity_profile_cargs,
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
        "mris_intensity_profile": mris_intensity_profile_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_intensity_profile(...)`.
 *
 * @interface
 */
interface MrisIntensityProfileOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Curvature file with the intensity profile measurement.
     */
    output_curvature_file: OutputPathType;
    /**
     * File with the mean profile-integral.
     */
    output_mean_profile_integral: OutputPathType | null;
}


function mris_intensity_profile_params(
    subject_name: string,
    hemi: string,
    volume: InputPathType,
    output_file: string,
    write_surf: string | null = null,
    sdir: string | null = null,
    white: string | null = null,
    pial: string | null = null,
    normalize_flag: boolean = false,
    mean: string | null = null,
    xform: InputPathType | null = null,
    src: InputPathType | null = null,
    dst: InputPathType | null = null,
    invert_flag: boolean = false,
): MrisIntensityProfileParameters {
    /**
     * Build parameters.
    
     * @param subject_name Name of the subject.
     * @param hemi Hemisphere (e.g. lh or rh).
     * @param volume Volume file to be processed.
     * @param output_file Output file where the measurement is saved.
     * @param write_surf Write the variational pial surface target locations.
     * @param sdir Specifies the SUBJECTS_DIR.
     * @param white Specifies the WHITE surface filename.
     * @param pial Specifies the PIAL surface filename.
     * @param normalize_flag Normalized sampling with respect to thickness.
     * @param mean Outputs the mean profile-integral to the specified file (output is in curv format).
     * @param xform Specify the registration transformation that maps the T1 volume to the input volume to be sampled.
     * @param src Source volume used when computing the registration transformation.
     * @param dst Destination volume used when computing the registration transformation.
     * @param invert_flag Apply the registration transformation inversely.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_intensity_profile" as const,
        "subject_name": subject_name,
        "hemi": hemi,
        "volume": volume,
        "output_file": output_file,
        "normalize_flag": normalize_flag,
        "invert_flag": invert_flag,
    };
    if (write_surf !== null) {
        params["write_surf"] = write_surf;
    }
    if (sdir !== null) {
        params["sdir"] = sdir;
    }
    if (white !== null) {
        params["white"] = white;
    }
    if (pial !== null) {
        params["pial"] = pial;
    }
    if (mean !== null) {
        params["mean"] = mean;
    }
    if (xform !== null) {
        params["xform"] = xform;
    }
    if (src !== null) {
        params["src"] = src;
    }
    if (dst !== null) {
        params["dst"] = dst;
    }
    return params;
}


function mris_intensity_profile_cargs(
    params: MrisIntensityProfileParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_intensity_profile");
    cargs.push((params["subject_name"] ?? null));
    cargs.push((params["hemi"] ?? null));
    cargs.push(execution.inputFile((params["volume"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    if ((params["write_surf"] ?? null) !== null) {
        cargs.push(
            "-write_surf",
            (params["write_surf"] ?? null)
        );
    }
    if ((params["sdir"] ?? null) !== null) {
        cargs.push(
            "-sdir",
            (params["sdir"] ?? null)
        );
    }
    if ((params["white"] ?? null) !== null) {
        cargs.push(
            "-white",
            (params["white"] ?? null)
        );
    }
    if ((params["pial"] ?? null) !== null) {
        cargs.push(
            "-pial",
            (params["pial"] ?? null)
        );
    }
    if ((params["normalize_flag"] ?? null)) {
        cargs.push("-normalize");
    }
    if ((params["mean"] ?? null) !== null) {
        cargs.push(
            "-mean",
            (params["mean"] ?? null)
        );
    }
    if ((params["xform"] ?? null) !== null) {
        cargs.push(
            "-xform",
            execution.inputFile((params["xform"] ?? null))
        );
    }
    if ((params["src"] ?? null) !== null) {
        cargs.push(
            "-src",
            execution.inputFile((params["src"] ?? null))
        );
    }
    if ((params["dst"] ?? null) !== null) {
        cargs.push(
            "-dst",
            execution.inputFile((params["dst"] ?? null))
        );
    }
    if ((params["invert_flag"] ?? null)) {
        cargs.push("-invert");
    }
    return cargs;
}


function mris_intensity_profile_outputs(
    params: MrisIntensityProfileParameters,
    execution: Execution,
): MrisIntensityProfileOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisIntensityProfileOutputs = {
        root: execution.outputFile("."),
        output_curvature_file: execution.outputFile([(params["output_file"] ?? null)].join('')),
        output_mean_profile_integral: ((params["mean"] ?? null) !== null) ? execution.outputFile([(params["mean"] ?? null)].join('')) : null,
    };
    return ret;
}


function mris_intensity_profile_execute(
    params: MrisIntensityProfileParameters,
    execution: Execution,
): MrisIntensityProfileOutputs {
    /**
     * This program computes the intensity profile of the cortical ribbon and writes the resulting measurement into a 'curvature' file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisIntensityProfileOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_intensity_profile_cargs(params, execution)
    const ret = mris_intensity_profile_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_intensity_profile(
    subject_name: string,
    hemi: string,
    volume: InputPathType,
    output_file: string,
    write_surf: string | null = null,
    sdir: string | null = null,
    white: string | null = null,
    pial: string | null = null,
    normalize_flag: boolean = false,
    mean: string | null = null,
    xform: InputPathType | null = null,
    src: InputPathType | null = null,
    dst: InputPathType | null = null,
    invert_flag: boolean = false,
    runner: Runner | null = null,
): MrisIntensityProfileOutputs {
    /**
     * This program computes the intensity profile of the cortical ribbon and writes the resulting measurement into a 'curvature' file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject_name Name of the subject.
     * @param hemi Hemisphere (e.g. lh or rh).
     * @param volume Volume file to be processed.
     * @param output_file Output file where the measurement is saved.
     * @param write_surf Write the variational pial surface target locations.
     * @param sdir Specifies the SUBJECTS_DIR.
     * @param white Specifies the WHITE surface filename.
     * @param pial Specifies the PIAL surface filename.
     * @param normalize_flag Normalized sampling with respect to thickness.
     * @param mean Outputs the mean profile-integral to the specified file (output is in curv format).
     * @param xform Specify the registration transformation that maps the T1 volume to the input volume to be sampled.
     * @param src Source volume used when computing the registration transformation.
     * @param dst Destination volume used when computing the registration transformation.
     * @param invert_flag Apply the registration transformation inversely.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisIntensityProfileOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_INTENSITY_PROFILE_METADATA);
    const params = mris_intensity_profile_params(subject_name, hemi, volume, output_file, write_surf, sdir, white, pial, normalize_flag, mean, xform, src, dst, invert_flag)
    return mris_intensity_profile_execute(params, execution);
}


export {
      MRIS_INTENSITY_PROFILE_METADATA,
      MrisIntensityProfileOutputs,
      MrisIntensityProfileParameters,
      mris_intensity_profile,
      mris_intensity_profile_params,
};
