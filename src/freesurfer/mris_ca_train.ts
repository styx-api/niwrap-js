// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_CA_TRAIN_METADATA: Metadata = {
    id: "59032030ae6b27b6bf93c0bcf469d00b88f21d33.boutiques",
    name: "mris_ca_train",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisCaTrainParameters {
    "__STYXTYPE__": "mris_ca_train";
    "hemi": string;
    "canonsurf": InputPathType;
    "annot_file": InputPathType;
    "subjects": Array<string>;
    "output_file": string;
    "sdir"?: string | null | undefined;
    "nbrs"?: number | null | undefined;
    "orig"?: InputPathType | null | undefined;
    "norm1": boolean;
    "norm2": boolean;
    "norm3": boolean;
    "ic"?: string | null | undefined;
    "sulc": boolean;
    "sulconly": boolean;
    "a"?: number | null | undefined;
    "parcellation_table"?: InputPathType | null | undefined;
    "n"?: number | null | undefined;
    "verbose"?: number | null | undefined;
    "debug_vertex"?: number | null | undefined;
    "gcs_means"?: string | null | undefined;
    "gcs_priors"?: string | null | undefined;
    "gcs_diff"?: string | null | undefined;
    "nfill"?: number | null | undefined;
    "no_fill": boolean;
    "help": boolean;
    "version": boolean;
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
        "mris_ca_train": mris_ca_train_cargs,
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
        "mris_ca_train": mris_ca_train_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_ca_train(...)`.
 *
 * @interface
 */
interface MrisCaTrainOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Classifier array output file generated by mris_ca_train
     */
    output_file: OutputPathType;
}


function mris_ca_train_params(
    hemi: string,
    canonsurf: InputPathType,
    annot_file: InputPathType,
    subjects: Array<string>,
    output_file: string,
    sdir: string | null = null,
    nbrs: number | null = null,
    orig: InputPathType | null = null,
    norm1: boolean = false,
    norm2: boolean = false,
    norm3: boolean = false,
    ic: string | null = null,
    sulc: boolean = false,
    sulconly: boolean = false,
    a: number | null = null,
    parcellation_table: InputPathType | null = null,
    n: number | null = null,
    verbose: number | null = null,
    debug_vertex: number | null = null,
    gcs_means: string | null = null,
    gcs_priors: string | null = null,
    gcs_diff: string | null = null,
    nfill: number | null = null,
    no_fill: boolean = false,
    help: boolean = false,
    version: boolean = false,
): MrisCaTrainParameters {
    /**
     * Build parameters.
    
     * @param hemi Hemisphere: rh or lh
     * @param canonsurf Canonical surface filename
     * @param annot_file Annotation filename
     * @param subjects List of subject ids
     * @param output_file Classifier array output file
     * @param sdir Directory as subjects directory (default: $SUBJECTS_DIR)
     * @param nbrs Neighborhood size (default=2)
     * @param orig Filename of original surface (default=smoothwm)
     * @param norm1 GCSA normalize input #1 after reading (default: disabled)
     * @param norm2 GCSA normalize input #2 after reading (default: disabled)
     * @param norm3 GCSA normalize input #3 after reading (default: disabled)
     * @param ic Parameters passed to the classifier routine (default: -ic 7 4)
     * @param sulc Specify sulc as only input (default: sulcus and curvature)
     * @param sulconly Same as -sulc
     * @param a Number of nearest neighbor smoothing iterations to apply to input 1 (default=5)
     * @param parcellation_table Parcellation table input file (default: none)
     * @param n Number of inputs (default=1,max=3)
     * @param verbose Diagnostic level (default=0)
     * @param debug_vertex Debug diagnostic level for a specific vertex (default=0)
     * @param gcs_means Extract likelihood means for all classes for given input
     * @param gcs_priors Extract priors for all classes for given input
     * @param gcs_diff Determine whether GCSAs are different
     * @param nfill Set the max number of iterations for filling empty vertices
     * @param no_fill Do not fill at all
     * @param help Print help info
     * @param version Print version info
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_ca_train" as const,
        "hemi": hemi,
        "canonsurf": canonsurf,
        "annot_file": annot_file,
        "subjects": subjects,
        "output_file": output_file,
        "norm1": norm1,
        "norm2": norm2,
        "norm3": norm3,
        "sulc": sulc,
        "sulconly": sulconly,
        "no_fill": no_fill,
        "help": help,
        "version": version,
    };
    if (sdir !== null) {
        params["sdir"] = sdir;
    }
    if (nbrs !== null) {
        params["nbrs"] = nbrs;
    }
    if (orig !== null) {
        params["orig"] = orig;
    }
    if (ic !== null) {
        params["ic"] = ic;
    }
    if (a !== null) {
        params["a"] = a;
    }
    if (parcellation_table !== null) {
        params["parcellation_table"] = parcellation_table;
    }
    if (n !== null) {
        params["n"] = n;
    }
    if (verbose !== null) {
        params["verbose"] = verbose;
    }
    if (debug_vertex !== null) {
        params["debug_vertex"] = debug_vertex;
    }
    if (gcs_means !== null) {
        params["gcs_means"] = gcs_means;
    }
    if (gcs_priors !== null) {
        params["gcs_priors"] = gcs_priors;
    }
    if (gcs_diff !== null) {
        params["gcs_diff"] = gcs_diff;
    }
    if (nfill !== null) {
        params["nfill"] = nfill;
    }
    return params;
}


function mris_ca_train_cargs(
    params: MrisCaTrainParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_ca_train");
    cargs.push((params["hemi"] ?? null));
    cargs.push(execution.inputFile((params["canonsurf"] ?? null)));
    cargs.push(execution.inputFile((params["annot_file"] ?? null)));
    cargs.push(...(params["subjects"] ?? null));
    cargs.push((params["output_file"] ?? null));
    if ((params["sdir"] ?? null) !== null) {
        cargs.push(
            "-sdir",
            (params["sdir"] ?? null)
        );
    }
    if ((params["nbrs"] ?? null) !== null) {
        cargs.push(
            "-nbrs",
            String((params["nbrs"] ?? null))
        );
    }
    if ((params["orig"] ?? null) !== null) {
        cargs.push(
            "-orig",
            execution.inputFile((params["orig"] ?? null))
        );
    }
    if ((params["norm1"] ?? null)) {
        cargs.push("-norm1");
    }
    if ((params["norm2"] ?? null)) {
        cargs.push("-norm2");
    }
    if ((params["norm3"] ?? null)) {
        cargs.push("-norm3");
    }
    if ((params["ic"] ?? null) !== null) {
        cargs.push(
            "-ic",
            (params["ic"] ?? null)
        );
    }
    if ((params["sulc"] ?? null)) {
        cargs.push("-sulc");
    }
    if ((params["sulconly"] ?? null)) {
        cargs.push("-sulconly");
    }
    if ((params["a"] ?? null) !== null) {
        cargs.push(
            "-a",
            String((params["a"] ?? null))
        );
    }
    if ((params["parcellation_table"] ?? null) !== null) {
        cargs.push(
            "-t",
            execution.inputFile((params["parcellation_table"] ?? null))
        );
    }
    if ((params["n"] ?? null) !== null) {
        cargs.push(
            "-n",
            String((params["n"] ?? null))
        );
    }
    if ((params["verbose"] ?? null) !== null) {
        cargs.push(
            "-v",
            String((params["verbose"] ?? null))
        );
    }
    if ((params["debug_vertex"] ?? null) !== null) {
        cargs.push(
            "-debug-vertex",
            String((params["debug_vertex"] ?? null))
        );
    }
    if ((params["gcs_means"] ?? null) !== null) {
        cargs.push(
            "-gcs-means",
            (params["gcs_means"] ?? null)
        );
    }
    if ((params["gcs_priors"] ?? null) !== null) {
        cargs.push(
            "-gcs-priors",
            (params["gcs_priors"] ?? null)
        );
    }
    if ((params["gcs_diff"] ?? null) !== null) {
        cargs.push(
            "-gcs-diff",
            (params["gcs_diff"] ?? null)
        );
    }
    if ((params["nfill"] ?? null) !== null) {
        cargs.push(
            "-nfill",
            String((params["nfill"] ?? null))
        );
    }
    if ((params["no_fill"] ?? null)) {
        cargs.push("-no-fill");
    }
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    return cargs;
}


function mris_ca_train_outputs(
    params: MrisCaTrainParameters,
    execution: Execution,
): MrisCaTrainOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisCaTrainOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function mris_ca_train_execute(
    params: MrisCaTrainParameters,
    execution: Execution,
): MrisCaTrainOutputs {
    /**
     * Creates a cortical parcellation atlas file based on one or more annotated subjects using probabilistic information.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisCaTrainOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_ca_train_cargs(params, execution)
    const ret = mris_ca_train_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_ca_train(
    hemi: string,
    canonsurf: InputPathType,
    annot_file: InputPathType,
    subjects: Array<string>,
    output_file: string,
    sdir: string | null = null,
    nbrs: number | null = null,
    orig: InputPathType | null = null,
    norm1: boolean = false,
    norm2: boolean = false,
    norm3: boolean = false,
    ic: string | null = null,
    sulc: boolean = false,
    sulconly: boolean = false,
    a: number | null = null,
    parcellation_table: InputPathType | null = null,
    n: number | null = null,
    verbose: number | null = null,
    debug_vertex: number | null = null,
    gcs_means: string | null = null,
    gcs_priors: string | null = null,
    gcs_diff: string | null = null,
    nfill: number | null = null,
    no_fill: boolean = false,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): MrisCaTrainOutputs {
    /**
     * Creates a cortical parcellation atlas file based on one or more annotated subjects using probabilistic information.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param hemi Hemisphere: rh or lh
     * @param canonsurf Canonical surface filename
     * @param annot_file Annotation filename
     * @param subjects List of subject ids
     * @param output_file Classifier array output file
     * @param sdir Directory as subjects directory (default: $SUBJECTS_DIR)
     * @param nbrs Neighborhood size (default=2)
     * @param orig Filename of original surface (default=smoothwm)
     * @param norm1 GCSA normalize input #1 after reading (default: disabled)
     * @param norm2 GCSA normalize input #2 after reading (default: disabled)
     * @param norm3 GCSA normalize input #3 after reading (default: disabled)
     * @param ic Parameters passed to the classifier routine (default: -ic 7 4)
     * @param sulc Specify sulc as only input (default: sulcus and curvature)
     * @param sulconly Same as -sulc
     * @param a Number of nearest neighbor smoothing iterations to apply to input 1 (default=5)
     * @param parcellation_table Parcellation table input file (default: none)
     * @param n Number of inputs (default=1,max=3)
     * @param verbose Diagnostic level (default=0)
     * @param debug_vertex Debug diagnostic level for a specific vertex (default=0)
     * @param gcs_means Extract likelihood means for all classes for given input
     * @param gcs_priors Extract priors for all classes for given input
     * @param gcs_diff Determine whether GCSAs are different
     * @param nfill Set the max number of iterations for filling empty vertices
     * @param no_fill Do not fill at all
     * @param help Print help info
     * @param version Print version info
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisCaTrainOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_CA_TRAIN_METADATA);
    const params = mris_ca_train_params(hemi, canonsurf, annot_file, subjects, output_file, sdir, nbrs, orig, norm1, norm2, norm3, ic, sulc, sulconly, a, parcellation_table, n, verbose, debug_vertex, gcs_means, gcs_priors, gcs_diff, nfill, no_fill, help, version)
    return mris_ca_train_execute(params, execution);
}


export {
      MRIS_CA_TRAIN_METADATA,
      MrisCaTrainOutputs,
      MrisCaTrainParameters,
      mris_ca_train,
      mris_ca_train_params,
};
