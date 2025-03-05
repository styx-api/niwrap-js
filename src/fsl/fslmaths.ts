// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSLMATHS_METADATA: Metadata = {
    id: "0d20592a5ceac7c34716ea871f7c98c448801d70.boutiques",
    name: "fslmaths",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslmathsOperationParameters {
    "__STYXTYPE__": "operation";
    "add"?: number | null | undefined;
    "sub"?: number | null | undefined;
    "mul"?: number | null | undefined;
    "div"?: number | null | undefined;
    "rem"?: number | null | undefined;
    "mas"?: InputPathType | null | undefined;
    "thr"?: number | null | undefined;
    "thrp"?: number | null | undefined;
    "thrP"?: number | null | undefined;
    "uthr"?: number | null | undefined;
    "uthrp"?: number | null | undefined;
    "uthrP"?: number | null | undefined;
    "max"?: number | null | undefined;
    "min"?: number | null | undefined;
    "seed"?: number | null | undefined;
    "restart"?: InputPathType | null | undefined;
    "save": boolean;
    "exp": boolean;
    "log": boolean;
    "sin": boolean;
    "cos": boolean;
    "tan": boolean;
    "asin": boolean;
    "acos": boolean;
    "atan": boolean;
    "sqr": boolean;
    "sqrt": boolean;
    "recip": boolean;
    "abs": boolean;
    "bin": boolean;
    "binv": boolean;
    "fillh": boolean;
    "fillh26": boolean;
    "index": boolean;
    "grid"?: Array<number> | null | undefined;
    "edge": boolean;
    "tfce"?: Array<number> | null | undefined;
    "tfceS"?: Array<number> | null | undefined;
    "nan": boolean;
    "nanm": boolean;
    "rand": boolean;
    "randn": boolean;
    "inm"?: number | null | undefined;
    "ing"?: number | null | undefined;
    "range": boolean;
    "tensor_decomp": boolean;
    "kernel_3D": boolean;
    "kernel_2D": boolean;
    "kernel_box"?: number | null | undefined;
    "kernel_boxv"?: number | null | undefined;
    "kernel_boxv3"?: Array<number> | null | undefined;
    "kernel_gauss"?: number | null | undefined;
    "kernel_sphere"?: number | null | undefined;
    "kernel_file"?: InputPathType | null | undefined;
    "dilM": boolean;
    "dilD": boolean;
    "dilF": boolean;
    "dilall": boolean;
    "ero": boolean;
    "eroF": boolean;
    "fmedian": boolean;
    "fmean": boolean;
    "fmeanu": boolean;
    "s"?: number | null | undefined;
    "subsamp2": boolean;
    "subsamp2offc": boolean;
    "Tmean": boolean;
    "Xmean": boolean;
    "Ymean": boolean;
    "Zmean": boolean;
    "Tstd": boolean;
    "Xstd": boolean;
    "Ystd": boolean;
    "Zstd": boolean;
    "Tmax": boolean;
    "Xmax": boolean;
    "Ymax": boolean;
    "Zmax": boolean;
    "Tmaxn": boolean;
    "Xmaxn": boolean;
    "Ymaxn": boolean;
    "Zmaxn": boolean;
    "Tmin": boolean;
    "Xmin": boolean;
    "Ymin": boolean;
    "Zmin": boolean;
    "Tmedian": boolean;
    "Xmedian": boolean;
    "Ymedian": boolean;
    "Zmedian": boolean;
    "Tperc"?: number | null | undefined;
    "Xperc"?: number | null | undefined;
    "Yperc"?: number | null | undefined;
    "Zperc"?: number | null | undefined;
    "Tar1": boolean;
    "roi"?: Array<number> | null | undefined;
    "bptf"?: Array<number> | null | undefined;
    "roc"?: Array<number> | null | undefined;
}


interface FslmathsParameters {
    "__STYXTYPE__": "fslmaths";
    "datatype_internal"?: "char" | "short" | "int" | "float" | "double" | "input" | null | undefined;
    "input_files": Array<InputPathType>;
    "operations": Array<FslmathsOperationParameters>;
    "output": string;
    "output_datatype"?: "char" | "short" | "int" | "float" | "double" | "input" | null | undefined;
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
        "fslmaths": fslmaths_cargs,
        "operation": fslmaths_operation_cargs,
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
        "fslmaths": fslmaths_outputs,
    };
    return outputsFuncs[t];
}


function fslmaths_operation_params(
    add: number | null = null,
    sub: number | null = null,
    mul: number | null = null,
    div: number | null = null,
    rem: number | null = null,
    mas: InputPathType | null = null,
    thr: number | null = null,
    thrp: number | null = null,
    thr_p: number | null = null,
    uthr: number | null = null,
    uthrp: number | null = null,
    uthr_p: number | null = null,
    max: number | null = null,
    min: number | null = null,
    seed: number | null = null,
    restart: InputPathType | null = null,
    save: boolean = false,
    exp: boolean = false,
    log: boolean = false,
    sin: boolean = false,
    cos: boolean = false,
    tan: boolean = false,
    asin: boolean = false,
    acos: boolean = false,
    atan: boolean = false,
    sqr: boolean = false,
    sqrt: boolean = false,
    recip: boolean = false,
    abs: boolean = false,
    bin: boolean = false,
    binv: boolean = false,
    fillh: boolean = false,
    fillh26: boolean = false,
    index: boolean = false,
    grid: Array<number> | null = null,
    edge: boolean = false,
    tfce: Array<number> | null = null,
    tfce_s: Array<number> | null = null,
    nan: boolean = false,
    nanm: boolean = false,
    rand: boolean = false,
    randn: boolean = false,
    inm: number | null = null,
    ing: number | null = null,
    range: boolean = false,
    tensor_decomp: boolean = false,
    kernel_3_d: boolean = false,
    kernel_2_d: boolean = false,
    kernel_box: number | null = null,
    kernel_boxv: number | null = null,
    kernel_boxv3: Array<number> | null = null,
    kernel_gauss: number | null = null,
    kernel_sphere: number | null = null,
    kernel_file: InputPathType | null = null,
    dil_m: boolean = false,
    dil_d: boolean = false,
    dil_f: boolean = false,
    dilall: boolean = false,
    ero: boolean = false,
    ero_f: boolean = false,
    fmedian: boolean = false,
    fmean: boolean = false,
    fmeanu: boolean = false,
    s: number | null = null,
    subsamp2: boolean = false,
    subsamp2offc: boolean = false,
    tmean: boolean = false,
    xmean: boolean = false,
    ymean: boolean = false,
    zmean: boolean = false,
    tstd: boolean = false,
    xstd: boolean = false,
    ystd: boolean = false,
    zstd: boolean = false,
    tmax: boolean = false,
    xmax: boolean = false,
    ymax: boolean = false,
    zmax: boolean = false,
    tmaxn: boolean = false,
    xmaxn: boolean = false,
    ymaxn: boolean = false,
    zmaxn: boolean = false,
    tmin: boolean = false,
    xmin: boolean = false,
    ymin: boolean = false,
    zmin: boolean = false,
    tmedian: boolean = false,
    xmedian: boolean = false,
    ymedian: boolean = false,
    zmedian: boolean = false,
    tperc: number | null = null,
    xperc: number | null = null,
    yperc: number | null = null,
    zperc: number | null = null,
    tar1: boolean = false,
    roi: Array<number> | null = null,
    bptf: Array<number> | null = null,
    roc: Array<number> | null = null,
): FslmathsOperationParameters {
    /**
     * Build parameters.
    
     * @param add Add following input to current image
     * @param sub Subtract following input from current image
     * @param mul Multiply current image by following input
     * @param div Divide current image by following input
     * @param rem Modulus remainder - divide current image by following input and take remainder
     * @param mas Use (following image>0) to mask current image
     * @param thr Use following number to threshold current image (zero anything below the number)
     * @param thrp Use following percentage (0-100) of ROBUST RANGE to threshold current image (zero anything below the number)
     * @param thr_p Use following percentage (0-100) of ROBUST RANGE of non-zero voxels and threshold below
     * @param uthr Use following number to upper-threshold current image (zero anything above the number)
     * @param uthrp Use following percentage (0-100) of ROBUST RANGE to upper-threshold current image (zero anything above the number)
     * @param uthr_p Use following percentage (0-100) of ROBUST RANGE of non-zero voxels and threshold above
     * @param max Take maximum of following input and current image
     * @param min Take minimum of following input and current image
     * @param seed Seed random number generator with following number
     * @param restart Replace the current image with input for future processing operations
     * @param save Save the current working image to the input filename
     * @param exp Exponential
     * @param log Natural logarithm
     * @param sin Sine function
     * @param cos Cosine function
     * @param tan Tangent function
     * @param asin Arc sine function
     * @param acos Arc cosine function
     * @param atan Arc tangent function
     * @param sqr Square
     * @param sqrt Square root
     * @param recip Reciprocal (1/current image)
     * @param abs Absolute value
     * @param bin Use (current image>0) to binarise
     * @param binv Binarise and invert (binarisation and logical inversion)
     * @param fillh Fill holes in a binary mask (holes are internal - i.e. do not touch the edge of the FOV)
     * @param fillh26 Fill holes using 26 connectivity
     * @param index Replace each nonzero voxel with a unique (subject to wrapping) index number
     * @param grid Add a 3D grid of intensity <value> with grid spacing <spacing>
     * @param edge Edge strength
     * @param tfce Enhance with TFCE, e.g. -tfce 2 0.5 6 (maybe change 6 to 26 for skeletons)
     * @param tfce_s Show support area for voxel (X,Y,Z)
     * @param nan Replace NaNs (improper numbers) with 0
     * @param nanm Make NaN (improper number) mask with 1 for NaN voxels, 0 otherwise
     * @param rand Add uniform noise (range 0:1)
     * @param randn Add Gaussian noise (mean=0 sigma=1)
     * @param inm Intensity normalisation (per 3D volume mean)
     * @param ing Intensity normalisation, global 4D mean
     * @param range Set the output calmin/max to full data range
     * @param tensor_decomp Convert a 4D (6-timepoint) tensor image into L1,2,3,FA,MD,MO,V1,2,3 (remaining image in pipeline is FA)
     * @param kernel_3_d 3x3x3 box centered on target voxel (set as default kernel)
     * @param kernel_2_d 3x3x1 box centered on target voxel
     * @param kernel_box All voxels in a cube of width <size> mm centered on target voxel
     * @param kernel_boxv All voxels in a cube of width <size> voxels centered on target voxel
     * @param kernel_boxv3 All voxels in a cuboid of dimensions X x Y x Z centered on target voxel
     * @param kernel_gauss Gaussian kernel (sigma in mm, not voxels)
     * @param kernel_sphere All voxels in a sphere of radius <size> mm centered on target voxel
     * @param kernel_file Use external file as kernel
     * @param dil_m Mean Dilation of non-zero voxels
     * @param dil_d Modal Dilation of non-zero voxels
     * @param dil_f Maximum filtering of all voxels
     * @param dilall Apply -dilM repeatedly until the entire FOV is covered
     * @param ero Erode by zeroing non-zero voxels when zero voxels found in kernel
     * @param ero_f Minimum filtering of all voxels
     * @param fmedian Median Filtering
     * @param fmean Mean filtering, kernel weighted (conventionally used with gauss kernel)
     * @param fmeanu Mean filtering, kernel weighted, un-normalised (gives edge effects)
     * @param s Create a gauss kernel of sigma mm and perform mean filtering
     * @param subsamp2 Downsamples image by a factor of 2 (keeping new voxels centred on old)
     * @param subsamp2offc Downsamples image by a factor of 2 (non-centred)
     * @param tmean Mean across time
     * @param xmean Mean across X axis
     * @param ymean Mean across Y axis
     * @param zmean Mean across Z axis
     * @param tstd Standard deviation across time
     * @param xstd Standard deviation across X axis
     * @param ystd Standard deviation across Y axis
     * @param zstd Standard deviation across Z axis
     * @param tmax Max across time
     * @param xmax Max across X axis
     * @param ymax Max across Y axis
     * @param zmax Max across Z axis
     * @param tmaxn Time index of max across time
     * @param xmaxn X index of max across X axis
     * @param ymaxn Y index of max across Y axis
     * @param zmaxn Z index of max across Z axis
     * @param tmin Min across time
     * @param xmin Min across X axis
     * @param ymin Min across Y axis
     * @param zmin Min across Z axis
     * @param tmedian Median across time
     * @param xmedian Median across X axis
     * @param ymedian Median across Y axis
     * @param zmedian Median across Z axis
     * @param tperc Nth percentile (0-100) of FULL RANGE across time
     * @param xperc Nth percentile (0-100) of FULL RANGE across X axis
     * @param yperc Nth percentile (0-100) of FULL RANGE across Y axis
     * @param zperc Nth percentile (0-100) of FULL RANGE across Z axis
     * @param tar1 Temporal AR(1) coefficient (use -odt float and probably demean first)
     * @param roi <xmin> <xsize> <ymin> <ysize> <zmin> <zsize> <tmin> <tsize>. Zero outside roi (using voxel coordinates). Inputting -1 for a size will set it to the full image extent for that dimension.
     * @param bptf <lowpass> <highpass>. Bandpass temporal filtering (use -odt float and probably demean first)
     * @param roc <threshold> <output>. ROC analysis
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "operation" as const,
        "save": save,
        "exp": exp,
        "log": log,
        "sin": sin,
        "cos": cos,
        "tan": tan,
        "asin": asin,
        "acos": acos,
        "atan": atan,
        "sqr": sqr,
        "sqrt": sqrt,
        "recip": recip,
        "abs": abs,
        "bin": bin,
        "binv": binv,
        "fillh": fillh,
        "fillh26": fillh26,
        "index": index,
        "edge": edge,
        "nan": nan,
        "nanm": nanm,
        "rand": rand,
        "randn": randn,
        "range": range,
        "tensor_decomp": tensor_decomp,
        "kernel_3D": kernel_3_d,
        "kernel_2D": kernel_2_d,
        "dilM": dil_m,
        "dilD": dil_d,
        "dilF": dil_f,
        "dilall": dilall,
        "ero": ero,
        "eroF": ero_f,
        "fmedian": fmedian,
        "fmean": fmean,
        "fmeanu": fmeanu,
        "subsamp2": subsamp2,
        "subsamp2offc": subsamp2offc,
        "Tmean": tmean,
        "Xmean": xmean,
        "Ymean": ymean,
        "Zmean": zmean,
        "Tstd": tstd,
        "Xstd": xstd,
        "Ystd": ystd,
        "Zstd": zstd,
        "Tmax": tmax,
        "Xmax": xmax,
        "Ymax": ymax,
        "Zmax": zmax,
        "Tmaxn": tmaxn,
        "Xmaxn": xmaxn,
        "Ymaxn": ymaxn,
        "Zmaxn": zmaxn,
        "Tmin": tmin,
        "Xmin": xmin,
        "Ymin": ymin,
        "Zmin": zmin,
        "Tmedian": tmedian,
        "Xmedian": xmedian,
        "Ymedian": ymedian,
        "Zmedian": zmedian,
        "Tar1": tar1,
    };
    if (add !== null) {
        params["add"] = add;
    }
    if (sub !== null) {
        params["sub"] = sub;
    }
    if (mul !== null) {
        params["mul"] = mul;
    }
    if (div !== null) {
        params["div"] = div;
    }
    if (rem !== null) {
        params["rem"] = rem;
    }
    if (mas !== null) {
        params["mas"] = mas;
    }
    if (thr !== null) {
        params["thr"] = thr;
    }
    if (thrp !== null) {
        params["thrp"] = thrp;
    }
    if (thr_p !== null) {
        params["thrP"] = thr_p;
    }
    if (uthr !== null) {
        params["uthr"] = uthr;
    }
    if (uthrp !== null) {
        params["uthrp"] = uthrp;
    }
    if (uthr_p !== null) {
        params["uthrP"] = uthr_p;
    }
    if (max !== null) {
        params["max"] = max;
    }
    if (min !== null) {
        params["min"] = min;
    }
    if (seed !== null) {
        params["seed"] = seed;
    }
    if (restart !== null) {
        params["restart"] = restart;
    }
    if (grid !== null) {
        params["grid"] = grid;
    }
    if (tfce !== null) {
        params["tfce"] = tfce;
    }
    if (tfce_s !== null) {
        params["tfceS"] = tfce_s;
    }
    if (inm !== null) {
        params["inm"] = inm;
    }
    if (ing !== null) {
        params["ing"] = ing;
    }
    if (kernel_box !== null) {
        params["kernel_box"] = kernel_box;
    }
    if (kernel_boxv !== null) {
        params["kernel_boxv"] = kernel_boxv;
    }
    if (kernel_boxv3 !== null) {
        params["kernel_boxv3"] = kernel_boxv3;
    }
    if (kernel_gauss !== null) {
        params["kernel_gauss"] = kernel_gauss;
    }
    if (kernel_sphere !== null) {
        params["kernel_sphere"] = kernel_sphere;
    }
    if (kernel_file !== null) {
        params["kernel_file"] = kernel_file;
    }
    if (s !== null) {
        params["s"] = s;
    }
    if (tperc !== null) {
        params["Tperc"] = tperc;
    }
    if (xperc !== null) {
        params["Xperc"] = xperc;
    }
    if (yperc !== null) {
        params["Yperc"] = yperc;
    }
    if (zperc !== null) {
        params["Zperc"] = zperc;
    }
    if (roi !== null) {
        params["roi"] = roi;
    }
    if (bptf !== null) {
        params["bptf"] = bptf;
    }
    if (roc !== null) {
        params["roc"] = roc;
    }
    return params;
}


function fslmaths_operation_cargs(
    params: FslmathsOperationParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    if ((params["add"] ?? null) !== null) {
        cargs.push(
            "-add",
            String((params["add"] ?? null))
        );
    }
    if ((params["sub"] ?? null) !== null) {
        cargs.push(
            "-sub",
            String((params["sub"] ?? null))
        );
    }
    if ((params["mul"] ?? null) !== null) {
        cargs.push(
            "-mul",
            String((params["mul"] ?? null))
        );
    }
    if ((params["div"] ?? null) !== null) {
        cargs.push(
            "-div",
            String((params["div"] ?? null))
        );
    }
    if ((params["rem"] ?? null) !== null) {
        cargs.push(
            "-rem",
            String((params["rem"] ?? null))
        );
    }
    if ((params["mas"] ?? null) !== null) {
        cargs.push(
            "-mas",
            execution.inputFile((params["mas"] ?? null))
        );
    }
    if ((params["thr"] ?? null) !== null) {
        cargs.push(
            "-thr",
            String((params["thr"] ?? null))
        );
    }
    if ((params["thrp"] ?? null) !== null) {
        cargs.push(
            "-thrp",
            String((params["thrp"] ?? null))
        );
    }
    if ((params["thrP"] ?? null) !== null) {
        cargs.push(
            "-thrP",
            String((params["thrP"] ?? null))
        );
    }
    if ((params["uthr"] ?? null) !== null) {
        cargs.push(
            "-uthr",
            String((params["uthr"] ?? null))
        );
    }
    if ((params["uthrp"] ?? null) !== null) {
        cargs.push(
            "-uthrp",
            String((params["uthrp"] ?? null))
        );
    }
    if ((params["uthrP"] ?? null) !== null) {
        cargs.push(
            "-uthrP",
            String((params["uthrP"] ?? null))
        );
    }
    if ((params["max"] ?? null) !== null) {
        cargs.push(
            "-max",
            String((params["max"] ?? null))
        );
    }
    if ((params["min"] ?? null) !== null) {
        cargs.push(
            "-min",
            String((params["min"] ?? null))
        );
    }
    if ((params["seed"] ?? null) !== null) {
        cargs.push(
            "-seed",
            String((params["seed"] ?? null))
        );
    }
    if ((params["restart"] ?? null) !== null) {
        cargs.push(
            "-restart",
            execution.inputFile((params["restart"] ?? null))
        );
    }
    if ((params["save"] ?? null)) {
        cargs.push("-save");
    }
    if ((params["exp"] ?? null)) {
        cargs.push("-exp");
    }
    if ((params["log"] ?? null)) {
        cargs.push("-log");
    }
    if ((params["sin"] ?? null)) {
        cargs.push("-sin");
    }
    if ((params["cos"] ?? null)) {
        cargs.push("-cos");
    }
    if ((params["tan"] ?? null)) {
        cargs.push("-tan");
    }
    if ((params["asin"] ?? null)) {
        cargs.push("-asin");
    }
    if ((params["acos"] ?? null)) {
        cargs.push("-acos");
    }
    if ((params["atan"] ?? null)) {
        cargs.push("-atan");
    }
    if ((params["sqr"] ?? null)) {
        cargs.push("-sqr");
    }
    if ((params["sqrt"] ?? null)) {
        cargs.push("-sqrt");
    }
    if ((params["recip"] ?? null)) {
        cargs.push("-recip");
    }
    if ((params["abs"] ?? null)) {
        cargs.push("-abs");
    }
    if ((params["bin"] ?? null)) {
        cargs.push("-bin");
    }
    if ((params["binv"] ?? null)) {
        cargs.push("-binv");
    }
    if ((params["fillh"] ?? null)) {
        cargs.push("-fillh");
    }
    if ((params["fillh26"] ?? null)) {
        cargs.push("-fillh26");
    }
    if ((params["index"] ?? null)) {
        cargs.push("-index");
    }
    if ((params["grid"] ?? null) !== null) {
        cargs.push(
            "-grid",
            ...(params["grid"] ?? null).map(String)
        );
    }
    if ((params["edge"] ?? null)) {
        cargs.push("-edge");
    }
    if ((params["tfce"] ?? null) !== null) {
        cargs.push(
            "-tfce",
            ...(params["tfce"] ?? null).map(String)
        );
    }
    if ((params["tfceS"] ?? null) !== null) {
        cargs.push(
            "-tfceS",
            ...(params["tfceS"] ?? null).map(String)
        );
    }
    if ((params["nan"] ?? null)) {
        cargs.push("-nan");
    }
    if ((params["nanm"] ?? null)) {
        cargs.push("-nanm");
    }
    if ((params["rand"] ?? null)) {
        cargs.push("-rand");
    }
    if ((params["randn"] ?? null)) {
        cargs.push("-randn");
    }
    if ((params["inm"] ?? null) !== null) {
        cargs.push(
            "-inm",
            String((params["inm"] ?? null))
        );
    }
    if ((params["ing"] ?? null) !== null) {
        cargs.push(
            "-ing",
            String((params["ing"] ?? null))
        );
    }
    if ((params["range"] ?? null)) {
        cargs.push("-range");
    }
    if ((params["tensor_decomp"] ?? null)) {
        cargs.push("-tensor_decomp");
    }
    if ((params["kernel_3D"] ?? null)) {
        cargs.push("-kernel 3D");
    }
    if ((params["kernel_2D"] ?? null)) {
        cargs.push("-kernel 2D");
    }
    if ((params["kernel_box"] ?? null) !== null) {
        cargs.push(
            "-kernel box",
            String((params["kernel_box"] ?? null))
        );
    }
    if ((params["kernel_boxv"] ?? null) !== null) {
        cargs.push(
            "-kernel boxv",
            String((params["kernel_boxv"] ?? null))
        );
    }
    if ((params["kernel_boxv3"] ?? null) !== null) {
        cargs.push(
            "-kernel boxv3",
            ...(params["kernel_boxv3"] ?? null).map(String)
        );
    }
    if ((params["kernel_gauss"] ?? null) !== null) {
        cargs.push(
            "-kernel gauss",
            String((params["kernel_gauss"] ?? null))
        );
    }
    if ((params["kernel_sphere"] ?? null) !== null) {
        cargs.push(
            "-kernel sphere",
            String((params["kernel_sphere"] ?? null))
        );
    }
    if ((params["kernel_file"] ?? null) !== null) {
        cargs.push(
            "-kernel file",
            execution.inputFile((params["kernel_file"] ?? null))
        );
    }
    if ((params["dilM"] ?? null)) {
        cargs.push("-dilM");
    }
    if ((params["dilD"] ?? null)) {
        cargs.push("-dilD");
    }
    if ((params["dilF"] ?? null)) {
        cargs.push("-dilF");
    }
    if ((params["dilall"] ?? null)) {
        cargs.push("-dilall");
    }
    if ((params["ero"] ?? null)) {
        cargs.push("-ero");
    }
    if ((params["eroF"] ?? null)) {
        cargs.push("-eroF");
    }
    if ((params["fmedian"] ?? null)) {
        cargs.push("-fmedian");
    }
    if ((params["fmean"] ?? null)) {
        cargs.push("-fmean");
    }
    if ((params["fmeanu"] ?? null)) {
        cargs.push("-fmeanu");
    }
    if ((params["s"] ?? null) !== null) {
        cargs.push(
            "-s",
            String((params["s"] ?? null))
        );
    }
    if ((params["subsamp2"] ?? null)) {
        cargs.push("-subsamp2");
    }
    if ((params["subsamp2offc"] ?? null)) {
        cargs.push("-subsamp2offc");
    }
    if ((params["Tmean"] ?? null)) {
        cargs.push("-Tmean");
    }
    if ((params["Xmean"] ?? null)) {
        cargs.push("-Xmean");
    }
    if ((params["Ymean"] ?? null)) {
        cargs.push("-Ymean");
    }
    if ((params["Zmean"] ?? null)) {
        cargs.push("-Zmean");
    }
    if ((params["Tstd"] ?? null)) {
        cargs.push("-Tstd");
    }
    if ((params["Xstd"] ?? null)) {
        cargs.push("-Xstd");
    }
    if ((params["Ystd"] ?? null)) {
        cargs.push("-Ystd");
    }
    if ((params["Zstd"] ?? null)) {
        cargs.push("-Zstd");
    }
    if ((params["Tmax"] ?? null)) {
        cargs.push("-Tmax");
    }
    if ((params["Xmax"] ?? null)) {
        cargs.push("-Xmax");
    }
    if ((params["Ymax"] ?? null)) {
        cargs.push("-Ymax");
    }
    if ((params["Zmax"] ?? null)) {
        cargs.push("-Zmax");
    }
    if ((params["Tmaxn"] ?? null)) {
        cargs.push("-Tmaxn");
    }
    if ((params["Xmaxn"] ?? null)) {
        cargs.push("-Xmaxn");
    }
    if ((params["Ymaxn"] ?? null)) {
        cargs.push("-Ymaxn");
    }
    if ((params["Zmaxn"] ?? null)) {
        cargs.push("-Zmaxn");
    }
    if ((params["Tmin"] ?? null)) {
        cargs.push("-Tmin");
    }
    if ((params["Xmin"] ?? null)) {
        cargs.push("-Xmin");
    }
    if ((params["Ymin"] ?? null)) {
        cargs.push("-Ymin");
    }
    if ((params["Zmin"] ?? null)) {
        cargs.push("-Zmin");
    }
    if ((params["Tmedian"] ?? null)) {
        cargs.push("-Tmedian");
    }
    if ((params["Xmedian"] ?? null)) {
        cargs.push("-Xmedian");
    }
    if ((params["Ymedian"] ?? null)) {
        cargs.push("-Ymedian");
    }
    if ((params["Zmedian"] ?? null)) {
        cargs.push("-Zmedian");
    }
    if ((params["Tperc"] ?? null) !== null) {
        cargs.push(
            "-Tperc",
            String((params["Tperc"] ?? null))
        );
    }
    if ((params["Xperc"] ?? null) !== null) {
        cargs.push(
            "-Xperc",
            String((params["Xperc"] ?? null))
        );
    }
    if ((params["Yperc"] ?? null) !== null) {
        cargs.push(
            "-Yperc",
            String((params["Yperc"] ?? null))
        );
    }
    if ((params["Zperc"] ?? null) !== null) {
        cargs.push(
            "-Zperc",
            String((params["Zperc"] ?? null))
        );
    }
    if ((params["Tar1"] ?? null)) {
        cargs.push("-Tar1");
    }
    if ((params["roi"] ?? null) !== null) {
        cargs.push(
            "-roi",
            ...(params["roi"] ?? null).map(String)
        );
    }
    if ((params["bptf"] ?? null) !== null) {
        cargs.push(
            "-bptf",
            ...(params["bptf"] ?? null).map(String)
        );
    }
    if ((params["roc"] ?? null) !== null) {
        cargs.push(
            "-roc",
            ...(params["roc"] ?? null).map(String)
        );
    }
    return cargs;
}


/**
 * Output object returned when calling `fslmaths(...)`.
 *
 * @interface
 */
interface FslmathsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The main output file produced by fslmaths
     */
    output_file: OutputPathType;
}


function fslmaths_params(
    input_files: Array<InputPathType>,
    operations: Array<FslmathsOperationParameters>,
    output: string,
    datatype_internal: "char" | "short" | "int" | "float" | "double" | "input" | null = "float",
    output_datatype: "char" | "short" | "int" | "float" | "double" | "input" | null = null,
): FslmathsParameters {
    /**
     * Build parameters.
    
     * @param input_files Input images for processing
     * @param operations Operations to perform on input images
     * @param output Output image file
     * @param datatype_internal Datatype used internally for calculations
     * @param output_datatype Datatype used for the output image
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fslmaths" as const,
        "input_files": input_files,
        "operations": operations,
        "output": output,
    };
    if (datatype_internal !== null) {
        params["datatype_internal"] = datatype_internal;
    }
    if (output_datatype !== null) {
        params["output_datatype"] = output_datatype;
    }
    return params;
}


function fslmaths_cargs(
    params: FslmathsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fslmaths");
    if ((params["datatype_internal"] ?? null) !== null) {
        cargs.push(
            "-dt",
            (params["datatype_internal"] ?? null)
        );
    }
    cargs.push(...(params["input_files"] ?? null).map(f => execution.inputFile(f)));
    cargs.push(...(params["operations"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    cargs.push((params["output"] ?? null));
    if ((params["output_datatype"] ?? null) !== null) {
        cargs.push(
            "-odt",
            (params["output_datatype"] ?? null)
        );
    }
    return cargs;
}


function fslmaths_outputs(
    params: FslmathsParameters,
    execution: Execution,
): FslmathsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslmathsOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function fslmaths_execute(
    params: FslmathsParameters,
    execution: Execution,
): FslmathsOutputs {
    /**
     * FSL utility for image arithmetic, statistics, and mathematical operations.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslmathsOutputs`).
     */
    params = execution.params(params)
    const cargs = fslmaths_cargs(params, execution)
    const ret = fslmaths_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fslmaths(
    input_files: Array<InputPathType>,
    operations: Array<FslmathsOperationParameters>,
    output: string,
    datatype_internal: "char" | "short" | "int" | "float" | "double" | "input" | null = "float",
    output_datatype: "char" | "short" | "int" | "float" | "double" | "input" | null = null,
    runner: Runner | null = null,
): FslmathsOutputs {
    /**
     * FSL utility for image arithmetic, statistics, and mathematical operations.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_files Input images for processing
     * @param operations Operations to perform on input images
     * @param output Output image file
     * @param datatype_internal Datatype used internally for calculations
     * @param output_datatype Datatype used for the output image
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslmathsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSLMATHS_METADATA);
    const params = fslmaths_params(input_files, operations, output, datatype_internal, output_datatype)
    return fslmaths_execute(params, execution);
}


export {
      FSLMATHS_METADATA,
      FslmathsOperationParameters,
      FslmathsOutputs,
      FslmathsParameters,
      fslmaths,
      fslmaths_operation_params,
      fslmaths_params,
};
