// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_CA_LABEL_METADATA: Metadata = {
    id: "c1ae5127f6f6b5ab0ae06b72523899f5770f008a.boutiques",
    name: "mris_ca_label",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisCaLabelParameters {
    "__STYXTYPE__": "mris_ca_label";
    "subject": string;
    "hemi": string;
    "canonsurf": InputPathType;
    "classifier": InputPathType;
    "outputfile": string;
    "seed"?: number | null | undefined;
    "sdir"?: string | null | undefined;
    "orig"?: string | null | undefined;
    "long_flag": boolean;
    "r"?: InputPathType | null | undefined;
    "novar_flag": boolean;
    "nbrs"?: number | null | undefined;
    "f"?: number | null | undefined;
    "t"?: InputPathType | null | undefined;
    "p"?: string | null | undefined;
    "v"?: number | null | undefined;
    "w"?: string | null | undefined;
    "help_flag": boolean;
    "version_flag": boolean;
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
        "mris_ca_label": mris_ca_label_cargs,
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
        "mris_ca_label": mris_ca_label_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_ca_label(...)`.
 *
 * @interface
 */
interface MrisCaLabelOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Labeled cortical surface model
     */
    labeled_surface: OutputPathType;
}


function mris_ca_label_params(
    subject: string,
    hemi: string,
    canonsurf: InputPathType,
    classifier: InputPathType,
    outputfile: string,
    seed: number | null = null,
    sdir: string | null = null,
    orig: string | null = null,
    long_flag: boolean = false,
    r: InputPathType | null = null,
    novar_flag: boolean = false,
    nbrs: number | null = null,
    f: number | null = null,
    t: InputPathType | null = null,
    p: string | null = null,
    v: number | null = null,
    w: string | null = null,
    help_flag: boolean = false,
    version_flag: boolean = false,
): MrisCaLabelParameters {
    /**
     * Build parameters.
    
     * @param subject Subject ID for labeling
     * @param hemi Hemisphere (rh or lh)
     * @param canonsurf Name of the spherical surface file that describes the registration of a subject's vertices to the average surface
     * @param classifier Specify classifier array input file
     * @param outputfile Output annotated surface file listing the region label for each vertex
     * @param seed Specify the seed for the random number generator
     * @param sdir Specify a subjects directory (default=$SUBJECTS_DIR)
     * @param orig Specify filename of original surface (default=smoothwm)
     * @param long_flag Refines the initial labeling read-in from -r (default: disabled)
     * @param r File containing precomputed parcellation
     * @param novar_flag Sets all covariance matrices to the identity (default: disabled)
     * @param nbrs Neighborhood size (default=2)
     * @param f Applies mode filter <number> times before writing output (default=10)
     * @param t Specify parcellation table input file (default: none)
     * @param p Output file containing label probability for each vertex.
     * @param v Diagnostic level (default=0)
     * @param w Writes-out snapshots of gibbs process every <number> iterations to <filename> (default=disabled)
     * @param help_flag Print help information
     * @param version_flag Print version information
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_ca_label" as const,
        "subject": subject,
        "hemi": hemi,
        "canonsurf": canonsurf,
        "classifier": classifier,
        "outputfile": outputfile,
        "long_flag": long_flag,
        "novar_flag": novar_flag,
        "help_flag": help_flag,
        "version_flag": version_flag,
    };
    if (seed !== null) {
        params["seed"] = seed;
    }
    if (sdir !== null) {
        params["sdir"] = sdir;
    }
    if (orig !== null) {
        params["orig"] = orig;
    }
    if (r !== null) {
        params["r"] = r;
    }
    if (nbrs !== null) {
        params["nbrs"] = nbrs;
    }
    if (f !== null) {
        params["f"] = f;
    }
    if (t !== null) {
        params["t"] = t;
    }
    if (p !== null) {
        params["p"] = p;
    }
    if (v !== null) {
        params["v"] = v;
    }
    if (w !== null) {
        params["w"] = w;
    }
    return params;
}


function mris_ca_label_cargs(
    params: MrisCaLabelParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_ca_label");
    cargs.push((params["subject"] ?? null));
    cargs.push((params["hemi"] ?? null));
    cargs.push(execution.inputFile((params["canonsurf"] ?? null)));
    cargs.push(execution.inputFile((params["classifier"] ?? null)));
    cargs.push((params["outputfile"] ?? null));
    if ((params["seed"] ?? null) !== null) {
        cargs.push(
            "-seed",
            String((params["seed"] ?? null))
        );
    }
    if ((params["sdir"] ?? null) !== null) {
        cargs.push(
            "-sdir",
            (params["sdir"] ?? null)
        );
    }
    if ((params["orig"] ?? null) !== null) {
        cargs.push(
            "-orig",
            (params["orig"] ?? null)
        );
    }
    if ((params["long_flag"] ?? null)) {
        cargs.push("-long");
    }
    if ((params["r"] ?? null) !== null) {
        cargs.push(
            "-r",
            execution.inputFile((params["r"] ?? null))
        );
    }
    if ((params["novar_flag"] ?? null)) {
        cargs.push("-novar");
    }
    if ((params["nbrs"] ?? null) !== null) {
        cargs.push(
            "-nbrs",
            String((params["nbrs"] ?? null))
        );
    }
    if ((params["f"] ?? null) !== null) {
        cargs.push(
            "-f",
            String((params["f"] ?? null))
        );
    }
    if ((params["t"] ?? null) !== null) {
        cargs.push(
            "-t",
            execution.inputFile((params["t"] ?? null))
        );
    }
    if ((params["p"] ?? null) !== null) {
        cargs.push(
            "-p",
            (params["p"] ?? null)
        );
    }
    if ((params["v"] ?? null) !== null) {
        cargs.push(
            "-v",
            String((params["v"] ?? null))
        );
    }
    if ((params["w"] ?? null) !== null) {
        cargs.push(
            "-w",
            (params["w"] ?? null)
        );
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("--help");
    }
    if ((params["version_flag"] ?? null)) {
        cargs.push("--version");
    }
    return cargs;
}


function mris_ca_label_outputs(
    params: MrisCaLabelParameters,
    execution: Execution,
): MrisCaLabelOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisCaLabelOutputs = {
        root: execution.outputFile("."),
        labeled_surface: execution.outputFile([(params["outputfile"] ?? null)].join('')),
    };
    return ret;
}


function mris_ca_label_execute(
    params: MrisCaLabelParameters,
    execution: Execution,
): MrisCaLabelOutputs {
    /**
     * Produces an annotation file in which each cortical surface vertex is assigned a neuroanatomical label using a previously-prepared atlas file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisCaLabelOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_ca_label_cargs(params, execution)
    const ret = mris_ca_label_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_ca_label(
    subject: string,
    hemi: string,
    canonsurf: InputPathType,
    classifier: InputPathType,
    outputfile: string,
    seed: number | null = null,
    sdir: string | null = null,
    orig: string | null = null,
    long_flag: boolean = false,
    r: InputPathType | null = null,
    novar_flag: boolean = false,
    nbrs: number | null = null,
    f: number | null = null,
    t: InputPathType | null = null,
    p: string | null = null,
    v: number | null = null,
    w: string | null = null,
    help_flag: boolean = false,
    version_flag: boolean = false,
    runner: Runner | null = null,
): MrisCaLabelOutputs {
    /**
     * Produces an annotation file in which each cortical surface vertex is assigned a neuroanatomical label using a previously-prepared atlas file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject Subject ID for labeling
     * @param hemi Hemisphere (rh or lh)
     * @param canonsurf Name of the spherical surface file that describes the registration of a subject's vertices to the average surface
     * @param classifier Specify classifier array input file
     * @param outputfile Output annotated surface file listing the region label for each vertex
     * @param seed Specify the seed for the random number generator
     * @param sdir Specify a subjects directory (default=$SUBJECTS_DIR)
     * @param orig Specify filename of original surface (default=smoothwm)
     * @param long_flag Refines the initial labeling read-in from -r (default: disabled)
     * @param r File containing precomputed parcellation
     * @param novar_flag Sets all covariance matrices to the identity (default: disabled)
     * @param nbrs Neighborhood size (default=2)
     * @param f Applies mode filter <number> times before writing output (default=10)
     * @param t Specify parcellation table input file (default: none)
     * @param p Output file containing label probability for each vertex.
     * @param v Diagnostic level (default=0)
     * @param w Writes-out snapshots of gibbs process every <number> iterations to <filename> (default=disabled)
     * @param help_flag Print help information
     * @param version_flag Print version information
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisCaLabelOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_CA_LABEL_METADATA);
    const params = mris_ca_label_params(subject, hemi, canonsurf, classifier, outputfile, seed, sdir, orig, long_flag, r, novar_flag, nbrs, f, t, p, v, w, help_flag, version_flag)
    return mris_ca_label_execute(params, execution);
}


export {
      MRIS_CA_LABEL_METADATA,
      MrisCaLabelOutputs,
      MrisCaLabelParameters,
      mris_ca_label,
      mris_ca_label_params,
};
